var $, localStorage, html_sanitize, parseBBCode, Audio, WebSocket;

var version = '0.12';
$(function() {
	var xhr, conn;
	var roomID = 0;
	var user = {};
	var users = Array();
	var msg = $('#msg');
	var msgRcvSnd = new Audio('/sounds/CRcv.mp3');
	var msgSendSnd = new Audio('/sounds/CSnd.mp3');
	var errorSnd = new Audio('/sounds/Error.mp3');
	var joinSnd = new Audio('/sounds/On.mp3');
	var leaveSnd = new Audio('/sounds/Off.mp3');
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
		if($('#username').val().trim()) {
			user.name = $('#username').val().trim();
			localStorage.username = user.name;
			conn.send("u" + user.name);
		}
	});
	$('#email').focusout(function() {
		if($('#email').val().trim()) {
			user.email = $('#email').val().toLowerCase().trim();
			var md5 = $.md5(user.email.toLowerCase().trim());
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			user.img = imgurl;
			localStorage.email = user.email;
			conn.send("e" + user.email);
		}
	});

	msg.keydown(function (e) {
		if (!e.shiftKey && e.keyCode == 13) {
			e.preventDefault();
			$('#form').submit();
		}
	});

	$('#roombtn-0').click(function() { switchRoom(0); });

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			joinSnd.play();
			conn.send("v" + version);

			user.email = localStorage.email ? localStorage.email : '';
			var md5 = $.md5(user.email.toLowerCase().trim());
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			user.img = imgurl;
			$('#email').val(user.email);
			if(user.email) conn.send("e" + user.email);

			user.name = localStorage.username ? localStorage.username : "anon";
			$('#username').val(user.name);
			conn.send("u" + user.name);

			$("#form").submit(function(evt) {
				//msgSendSnd.play();
				evt.preventDefault();
				if (!conn) return;
				if (!msg.val()) return;

				conn.send('m' + msg.val());
				msg.val('');
			});
		};

		$(window).unload(function() {
			leaveSnd.play();
			conn.close();
		});

		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
			$('#form').submit(null);
			$('#send-btn').text('Reconnect').click(function() {window.location.reload();});
			$('#msg,#username,#email').prop('disabled', true);
		};

		conn.onmessage = function(evt) {
			try {
				if(evt.data == 'p') {
					conn.send('p');
					return;
				}

				console.log(evt);
				var json = JSON.parse(evt.data);
				var d = $('<div></div>');
				if (json.error) {
					errorSnd.play();
					d.innerHTML("<b>" + json.msg + "</b>");
					d.className('error');
				} else if (json.cmd) {
					switch (json.cmd) {
					case "userjoin":
						if(json.args.id != user.ID)
							appendUser(json.args.name, json.args.email, json.args.id);
						break;
					case "userleave":
						if(json.args.id != user.ID)
							removeUser(json.args.id);
						break;
					case "namechange":
						if(json.args.id != user.ID)
							changeName(json.args.id, json.args.newname);
						break;
					case "emailchange":
						if(json.args.id != user.ID)
							changeEmail(json.args.id, json.args.email);
						break;
					case "fnamechange":
						user.name = json.args.newname;
						$('#username').val(user.name);
						break;
					case "idset":
						user.ID = json.args.id;
						break;
					default: break;
					}
				} else if (json.notif) {
					d.addClass('chat notif panel');
					d.html("<i>" + html_sanitize(json.notif) + "</i>");
					appendLog(d, json.targets);
				} else if (json.msg) {
					if (json.user == user.ID) {
						d.addClass('me msg');
						d.append($('<img>').attr('src', user.img));
						d.append($('<div class="name">').text(user.name));
						var msg = $('<div>');
						msg.html(parseBBCode(html_sanitize(json.msg)));
						msg.addClass('chat panel');
						d.append(msg);
					} else {
						msgRcvSnd.play();
						d.addClass('msg');
						d.append($('<img>').attr('src', users[json.user].img));
						d.append($('<div class="name">').text(users[json.user].name));
						var msg = $('<div>');
						msg.html(parseBBCode(html_sanitize(json.msg)));
						msg.addClass('chat panel');
						d.append(msg);
					}
					if(json.targets) json.targets.forEach(function(room) {
						if($('#room-'+room).length == 0) createRoom(room);
					});

					appendLog(d, json.targets);
				}
			} catch (e) {
				errorSnd.play();
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
