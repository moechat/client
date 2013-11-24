var $, localStorage, html_sanitize, parseBBCode, Audio, WebSocket;

var version = '0.13';
$(function() {
	var xhr, conn;
	var roomID = 0;
	var user = {};
	var users = Array();
	var msgbox = $('#msg');
	var msgRcvSnd = new Audio('/sounds/CRcv.mp3');
	var errorSnd = new Audio('/sounds/Error.mp3');
	var joinSnd = new Audio('/sounds/On.mp3');
	var leaveSnd = new Audio('/sounds/Off.mp3');
	var userbox = $('#userbox');
	var lastUid = Array();
	lastUid[0] = -1;

	queryUsers();

	function appendLog(msg, rooms) {
		var log, msgwrap;
		if(rooms) {
			rooms.forEach(function(room) {
				log = $('#room-'+room+' .log');
				msgwrap = $('#room-'+room+' .msgwrap');
				msgwrap.append(msg);
				log.scrollTop(msgwrap.height() - log.height());
				lastUid[room] = -1;
			});
		} else {
			log = $('.log');
			msgwrap = $('.msgwrap');
			msgwrap.append(msg);
			log.scrollTop(msgwrap.height() - log.height());
			lastUid[-1] = -1;
		}
	}

	function appendMsg(uid, msg, room) {
		var log = $('#room-'+room+' .log');
		var msgwrap = $('#room-'+room+' .msgwrap');

		console.log(room);
		if (uid == lastUid[room] && lastUid[-1] == 0) {
			msgwrap.children(':last').append(msg);
		} else {
			var d = $('<div>').addClass('msg');

			if (uid == user.ID) {
				d.addClass('me');
				d.append($('<img>').attr('src', user.img));
				d.append($('<div class="name">').text(user.name));
				d.append(msg);
			} else {
				msgRcvSnd.play();
				d.append($('<img>').attr('src', users[uid].img));
				d.append($('<div class="name">').text(users[uid].name));
				d.append(msg);
			}

			msgwrap.append(d);
		}

		lastUid[room] = uid;
		lastUid[-1] = 0;
		log.scrollTop(msgwrap.height() - log.height());
	}

	$('#username').focusout(function() {
		var newname = $('#username').val().trim();
		$('#username').val(newname);
		if(newname && newname != user.name) {
			user.name = newname;
			localStorage.username = user.name;
			conn.send("u" + user.name);
		}
	});
	$('#email').focusout(function() {
		var newemail = $('#email').val().trim();
		$('#email').val(newemail);
		newemail = newemail.toLowerCase();
		if(newemail && newemail != user.email) {
			user.email = newemail;
			var md5 = $.md5(user.email);
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			user.img = imgurl;
			localStorage.email = user.email;
			conn.send("e" + user.email);
		}
	});

	msgbox.keydown(function (e) {
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
				evt.preventDefault();
				if (!conn) return;
				var m = msgbox.val();
				if (!m) return;

				if(m.indexOf("/") == 0)
					conn.send('c' + m.substring(1));
				else
					conn.send('m' + m);
				msgbox.val('');
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
				var d = $('<div></div>').addClass('chat panel');
				if (json.error) {
					errorSnd.play();
					d.addClass('error');
					d.append($('<b>').text(json.msg));
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
					d.addClass('notif');
					d.append($('<i>').text(json.notif));
					appendLog(d, json.targets);
				} else if (json.msg) {
					d.html(parseBBCode(html_sanitize(json.msg)));
					if(json.targets) json.targets.forEach(function(room) {
						if($('#room-'+room).length == 0) createRoom(room);
					});

					appendMsg(json.user, d, json.targets[0]);
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
		e.html('<img src="'+imgurl+'">');
		e.append($('<span class="name">').text(username));
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
		room.append($('<h3>').text(users[id].name));
		room.append($('<div class="log"><div class="msgwrap">'));
		room.hide();
		$('#roomwrap').append(room);

		return room;
	}
});
