var $, localStorage, html_sanitize, parseBBCode;

var version = '0.12';
$(function() {
	var xhr, conn, username, userID;
	var roomID = 0;
	var users = Array();
	var msg = $('#msg');
	var userbox = $('#userbox');

	queryUsers();

	function appendLog(msg, rooms) {
		var log, msgwrap;
		if(rooms) {
			rooms.forEach(function(room) {
				log = $('#room-'+room+' .log');
				msgwrap = $('#room-'+room+' .msgwrap');
				msgwrap.append(msg);
				log.scrollTop(msgwrap.height() - log.height());
			});
		} else {
			log = $('.log');
			msgwrap = $('.msgwrap');
			msgwrap.append(msg);
			log.scrollTop(msgwrap.height() - log.height());
		}
	}

	$('#username').focusout(function() {
		console.log($('#username').val());
		localStorage.username = $('#username').val();
		if($('#username').val()) {
			conn.send("u" + $('#username').val());
			username = $('#username').val();
		}
	});
	$('#email').focusout(function() {
		localStorage.email = $('#email').val();
		console.log($("#email").val());
		if($('#email').val()) {
			conn.send("e" + $('#email').val());
		}
	});

	msg.keydown(function (e) {
		if (e.ctrlKey && e.keyCode == 13) $('#form').submit();
	});

	$('#roombtn-0').click(function() { switchRoom(0); });

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			var email = localStorage.email ? localStorage.email : '';
			$('#email').val(email);
			if(email) conn.send("e" + email);

			username = localStorage.username ? localStorage.username : "anon" + Math.floor(Math.random() * 1000000);
			$('#username').val(username);
			conn.send("u" + username);

			conn.send("v" + version);

			$("#form").submit(function(evt) {
				evt.preventDefault();
				if (!conn) return;
				if (!msg.val()) return;

				conn.send('m' + msg.val());
				msg.val('');
			});
		};

		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
			$('#form').submit(null);
			$('#send-btn').text('Reconnect').click(function() {window.location.reload();});
			$('#msg,#username,#email').prop('disabled', true);
		};

		conn.onmessage = function(evt) {
			console.log(evt);
			try {
				if(evt.data == 'p') {
					conn.send('p');
					return;
				}

				var json = JSON.parse(evt.data);
				var d = $('<div></div>');
				if (json.error) {
					d.innerHTML("<b>" + json.msg + "</b>");
					d.className('error');
				} else if (json.cmd) {
					switch (json.cmd) {
					case "userjoin":
						if(json.args.id != userID)
							appendUser(json.args.name, json.args.email, json.args.id);
						break;
					case "userleave":
						if(json.args.id != userID)
							removeUser(json.args.id);
						break;
					case "namechange":
						if(json.args.id != userID)
							changeName(json.args.id, json.args.newname);
						break;
					case "emailchange":
						if(json.args.id != userID)
							changeEmail(json.args.id, json.args.email);
						break;
					case "fnamechange":
						username = json.args.newname;
						$('#username').val(username);
						break;
					case "idset":
						userID = json.args.id;
						break;
					default: break;
					}
				} else if (json.notif) {
					d.addClass('chat notif panel');
					d.html("<i>" + html_sanitize(json.notif) + "</i>");
					appendLog(d, json.targets);
				} else if (json.msg) {
					if (json.user == username) {
						d.addClass('me');
						var msg = $('<div>');
						msg.html(parseBBCode(html_sanitize(json.msg)));
						msg.addClass('chat panel');
						d.append(msg);
					} else {
						d.addClass('chat panel');
						d.html(parseBBCode(json.user+": "+html_sanitize(json.msg)));
					}
					if(json.targets) json.targets.forEach(function(room) {
						if($('#room-'+room).length == 0) createRoom(room);
					});

					appendLog(d, json.targets);
				}
			} catch (e) {
				appendLog($('<div class="chat error panel"><div/>').text('Error "'+e+'" while parsing message: '+evt.data));
			}
		};
	} else {
		appendLog($('<div class="chat error panel"><b>Your browser does not support WebSockets.</b></div>'));
	}

	function queryUsers() {
		$.ajax('http://moechat.sauyon.com/users', {
			async: false,
			crossDomain: false,
			success: function(data) {
				if (!data) return;
				data.forEach(function (user) {
					appendUser(user.username, user.email, user.id);
				});
			}
		});
	}

	function appendUser(username, email, id) {
		if($('#user-'+id).length != 0) return false;

		var e = $('<div></div>');
		var md5 = $.md5(email.toLowerCase().trim());
		var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

		e.attr('id', 'user-'+id).addClass('userbtn').data('id', id);
		e.html('<img src="'+imgurl+'"><span class="name">'+username+'</span>');
		e.click(function(evt) { switchRoom(id); });
		userbox.append(e);

		users[id] = {
			name: username,
			email: email,
			img: imgurl
		};

		return e;
	}

	function removeUser(id) {
		$('#user-'+id).remove();
	}

	function changeName(id, newname) {
		$('#user-'+id+' .name').text(newname);
		users[id].name = newname;
	}

	function changeEmail(id, newemail) {
		if($('#user-'+id).length == 0) return;

		var md5 = $.md5(newemail.toLowerCase().trim());
		var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

		$('#user-'+id+' img').attr('src', imgurl);

		users[id].email = newemail;
		users[id].img = imgurl;
	}

	function switchRoom(id) {
		if(id == roomID) return;
		roomID = id;

		$('#chatroom-column .active').removeClass('active');
		if(id) $('#user-'+id).addClass('active');
		else $('#roombtn-0').addClass('active');

		conn.send('t'+id);
		$('.room.current').hide().removeClass('current');
		var currentRoom = $('#room-'+id);
		if(currentRoom.length == 0)
			currentRoom = createRoom(id);

		currentRoom.show().addClass('current');
	}

	function createRoom(id) {
		var room = $('<div></div>');
		room.attr('id', 'room-'+id).addClass('room');
		room.html('<h3>'+users[id].name+'</h3>' +
		          '<div class="log"><div class="msgwrap"></div></div>');
		room.hide();
		$('#roomwrap').append(room);

		return room;
	}
});
