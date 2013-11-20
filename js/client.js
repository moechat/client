var $, localStorage, html_sanitize, parseBBCode;

var version = '0.10';
$(function() {
	var xhr, conn, username, userID;
	var roomID = 0;
	var msg = $('#msg');
	var userbox = $('#userbox');

	queryUsers();

	function appendLog(msg, room) {
		var log, msgwrap;
		if(room == -1) {
			log = $('.log');
			msgwrap = $('.msgwrap');
		} else {
			log = $('#room-'+room+' .log');
			msgwrap = $('#room-'+room+' .msgwrap');
		}

		var doScroll = true;
		msgwrap.append(msg);
		if (doScroll) {
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
	$('#lobby-button').click(function() { switchRoom(0); });

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			console.log("Connected!");

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
			appendLog($("<div><b>Connection closed.</b></div>"), -1);
			$('#form').submit(null);
			$('#submitBtn').text('Reconnect').click(function() {window.location.reload();});
			$('#msg,#username,#email').prop('disabled', true);
		};

		conn.onmessage = function(evt) {
			console.log(evt);
			try {
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
					default: break;
					}
				} else if (json.notif) {
					console.log(json.notif);
					d.html("<i>" + html_sanitize(json.notif) + "</i>");
					appendLog(d, -1);
				} else if (json.msg) {
					if (json.user == username) {
						d.html(html_sanitize(parseBBCode("me: " + json.msg)));
					} else {
						d.html(html_sanitize(parseBBCode(json.user+": "+json.msg)));
					}
					appendLog(d, json.target);
				}
			} catch (e) {
				appendLog($('<div class="error"><div/>').text('Error '+e+' while parsing message: '+evt.data), -1);
			}
		};
	} else {
		appendLog($("<div><b>Your browser does not support WebSockets.</b></div>"), -1);
	}

	function queryUsers() {
		xhr = new XMLHttpRequest();
		xhr.open("GET", "http://moechat.sauyon.com/users", true);
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState == 4) {
				var users = eval(xhr.response);
				if (users) {
					users.sort(function (a, b) {
						return a.username.charCodeAt(0) - b.username.charCodeAt(0);
					});
					users.forEach(function (user) {
						appendUser(user.username, user.email, user.id);
					});
				}
			}
		};
		xhr.send(null);
	}

	function appendUser(username, email, id) {
		if($('#user-'+id).length != 0) return;
		var e = $('<div></div>');
		var md5 = $.md5(email.toLowerCase().trim());
		var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

		e.attr('id', 'user-'+id).addClass('user');
		e.html('<img src="'+imgurl+'"><br><span>'+username+'</span>');
		e.click(function(evt) { switchRoom(id); });
		userbox.append(e);
	}

	function removeUser(id) {
		$('#user-'+id).remove();
	}

	function changeName(id, newname) {
		$('#user-'+id).children('span').text(newname);
	}

	function changeEmail(id, newemail) {
		if($('#user-'+id).length == 0) return;

		var md5 = $.md5(newemail.toLowerCase().trim());
		var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

		$('#user-'+id+' img').attr('src', imgurl);
	}

	function switchRoom(id) {
		if(id == roomID) return;
		roomID = id;

		$('#userbox .selected').removeClass('selected');
		if(id) $('#user-'+id).addClass('selected');
		else $('#lobby-button').addClass('selected');

		conn.send('t'+id);
		$('.room.current').hide().removeClass('current');
		var currentRoom = $('#room-'+id);

		if(currentRoom.length == 0) {
			currentRoom = $('<div></div>');
			currentRoom.attr('id', 'room-'+id).addClass('room current');
			currentRoom.html('<h3>'+$('#user-'+id+' span').html()+'</h3>' +
			                 '<div class="log"><div class="msgwrap"></div></div>');
			$('#roomwrap').append(currentRoom);
		} else {
			currentRoom.show().addClass('current');
		}
	}
});
