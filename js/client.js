var $, localStorage, Audio, WebSocket, OTR, DSA;

var version = '0.0.16';
$(function() {
	var xhr, conn, server;
	var roomID = 0;
	var user = {};
	var users = {};
	var msgbox = $('#msg');
	var msgRcvSnd = new Audio('/sounds/CRcv.mp3');
	var errorSnd = new Audio('/sounds/Error.mp3');
	var userbox = $('#userbox');
	var privkey;

	function playSnd(snd) {
		snd.pause();
		snd.currentTime = 0;
		snd.play();
	}

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

	function appendMsg(uid, msg, room) {
		var log = $('#room-'+room+' .log');
		var msgwrap = $('#room-'+room+' .msgwrap');

		if (uid != user.ID) playSnd(msgRcvSnd);

		if (uid == msgwrap.children(':last').data('uid')) {
			var lmsg = msgwrap.find(':last-child .msg-body');
			lmsg.html(lmsg.html() + '<hr>' + msg);
		} else {
			var d = $('<div class="chat msg panel">').data('uid', uid);
			var u = $('<h6 class="name">');
			var m = $('<div class="msg-body">');

			if (uid == user.ID) {
				d.append($('<img>').attr('src', user.img));
				u.text(user.name);
			} else {
				d.append($('<img>').attr('src', users[uid].img));
				u.text(users[uid].name);
			}

			m.html(msg);
			m.prepend(u);
			d.append(m);

			msgwrap.append(d);
		}

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

	function connect() {
		queryUsers();

		server = new OTR({priv: privkey});
		//server.REQUIRE_ENCRYPTION = true;

		$('.disconnect.error').last().html('Connection closed. Reconnecting...');
		$('#send-btn').addClass('disabled');

		server.on('io', function(msg) {
			conn.send(msg);
		});

		server.on('ui', function(msg) {
			try {
				if(msg == 'p') {
					conn.send('p');
					return;
				}

				console.log(msg);
				var d;
				var json = JSON.parse(msg);
				if (json.error) {
					playSnd(errorSnd);
					d = $('<div></div>').addClass('chat error panel');
					d.append($('<b>').text(json.msg));
					appendLog(d, [-1]);
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
					d = $('<div></div>').addClass('chat notif panel');
					d.append($('<i>').text(json.notif));
					appendLog(d, json.targets);
				} else if (json.msg) {
					if(json.target && $('#room-'+json.target).length == 0) createRoom(json.target);

					appendMsg(json.user, json.msg, json.target);
				}
			} catch (e) {
				playSnd(errorSnd);
				appendLog($('<div class="chat error panel"><div/>').text('Error "'+e+'" while parsing message: '+msg));
			}
		});

		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			server.sendMsg("v" + version);

			user.email = localStorage.email ? localStorage.email : '';
			var md5 = $.md5(user.email.toLowerCase().trim());
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			user.img = imgurl;
			$('#email').val(user.email);
			if(user.email) server.sendMsg("e" + user.email);

			user.name = localStorage.username ? localStorage.username : "anon";
			$('#username').val(user.name);
			server.sendMsg("u" + user.name);

			$("#form").submit(function(evt) {
				evt.preventDefault();
				if (!conn) return;
				var m = msgbox.val();
				if (!m) return;

				if(m.indexOf("/") == 0)
					server.sendMsg('c' + m.substring(1));
				else
					server.sendMsg('m' + m);
				msgbox.val('');
			});

			$('#send-btn').removeClass('disabled').text('Send').click($('#form').submit);
			$('#msg,#username,#email').prop('disabled', false);
			$('.disconnect.error').last().html('Connection closed. Reconnected.');
		};

		$(window).unload(function() {
			conn.close();
		});

		conn.onclose = function(evt) {
			appendLog($('<div class="chat panel disconnect error">Connection closed.'
			            + ' <a class="retry-btn">Reconnect?</a></div>'));
			$('#form').submit(null);
			$('#send-btn').text('Reconnect').click(connect);
			$('.retry-btn').click(connect);
			$('#msg,#username,#email').prop('disabled', true);
		};

		conn.onmessage = function(evt) {
			server.receiveMsg(evt.data);
		};
	}

	if (window["WebSocket"]) {
		if(localStorage.privKey) {
		privkey = localStorage.privKey;
		} else {
			var d = $('<div class="chat notif panel></div>');
			d.text('Generating new key....');
			appendLog(d, [-1]);

			new DSA();

			d.text('Generating new key.... Done.');
		}

		connect();
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

		server.sendMsg('t'+id);
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
