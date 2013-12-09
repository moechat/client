var MoeChat, $, localStorage, WebSocket, OTR, DSA;

$(function() {
	MoeChat.imgBtn = $('#img-btn');
	MoeChat.roomID = 0;
	MoeChat.user = {};
	MoeChat.users = {};
	MoeChat.msgbox = $('#msgbox');
	MoeChat.userbox = $('#userbox');
	MoeChat.imgbtn = $('#img-btn');

	MoeChat.initOptions();
	MoeChat.initImgUploads();

	function playSnd(snd) {
		snd.pause();
		snd.currentTime = 0;
		snd.play();
	}

	MoeChat.appendLog = function(msg, rooms) {
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
	};

	function appendMsg(uid, msg, room) {
		var log = $('#room-'+room+' .log');
		var msgwrap = $('#room-'+room+' .msgwrap');

		if (uid != MoeChat.user.ID) playSnd(MoeChat.sounds.msgRcvSnd);

		if (uid == msgwrap.children(':last').data('uid')) {
			var lmsg = msgwrap.find(':last-child .msg-body');
			lmsg.html(lmsg.html() + '<hr>' + msg);
		} else {
			var d = $('<div class="chat msg panel">').data('uid', uid);
			var u = $('<h6 class="name">');
			var m = $('<div class="msg-body">');

			if (uid == MoeChat.user.ID) {
				d.append($('<img>').attr('src', MoeChat.user.img));
				u.text(MoeChat.user.name);
			} else {
				d.append($('<img>').attr('src', MoeChat.users[uid].img));
				u.text(MoeChat.users[uid].name);
			}

			m.html(msg);
			m.prepend(u);
			d.append(m);

			msgwrap.append(d);
		}

		log.scrollTop(msgwrap.height() - log.height());
	}

	$('#username').change(function() {
		var newname = $('#username').val().trim();
		$('#username').val(newname);
		if(newname) {
			MoeChat.user.name = newname;
			localStorage.username = MoeChat.user.name;
			MoeChat.conn.send("u" + MoeChat.user.name);
		}
	});
	$('#email').change(function() {
		var newemail = $('#email').val().trim();
		$('#email').val(newemail);
		newemail = newemail.toLowerCase();
		if(newemail) {
			MoeChat.user.email = newemail;
			var md5 = $.md5(MoeChat.user.email);
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			MoeChat.user.img = imgurl;
			localStorage.email = MoeChat.user.email;
			MoeChat.conn.send("e" + MoeChat.user.email);
		}
	});

	$('#roombtn-0').click(function() { switchRoom(0); });

	function connect() {
		MoeChat.userbox.html('');
		queryUsers();

		MoeChat.otr = new OTR({priv: MoeChat.privkey});

		$('.disconnect.error').last().text('Reconnecting...');
		$('#send-btn,#img-btn').addClass('disabled');

		MoeChat.otr.on('io', function(msg) {
			MoeChat.conn.send(msg);
		});

		MoeChat.otr.on('ui', function(msg) {
			try {
				console.log('Receiving' + msg);
				var d;
				var json = JSON.parse(msg);
				if (json.error) {
					playSnd(MoeChat.sounds.errorSnd);
					d = $('<div></div>').addClass('chat error panel');
					d.append($('<b>').text(json.msg));
					MoeChat.appendLog(d, [-1]);
				} else if (json.cmd) {
					switch (json.cmd) {
					case "idset":
						MoeChat.user.ID = json.args.id;
						break;
					case "userjoin":
						if(json.args.id != MoeChat.user.ID)
							appendUser(json.args.name, json.args.email, json.args.id);
						break;
					case "userleave":
						if(json.args.id != MoeChat.user.ID)
							removeUser(json.args.id);
						break;
					case "namechange":
						if(json.args.id != MoeChat.user.ID)
							changeName(json.args.id, json.args.newname);
						break;
					case "fnamechange":
						MoeChat.user.name = json.args.newname;
						$('#username').val(MoeChat.user.name);
						break;
					case "emailchange":
						if(json.args.id != MoeChat.user.ID)
							changeEmail(json.args.id, json.args.email);
						break;
					case "uploadkey":
						MoeChat.imgUpload.submit(json.args.key);
					default: break;
					}
				} else if (json.notif) {
					d = $('<div></div>').addClass('chat notif panel');
					d.append($('<i>').text(json.notif));
					MoeChat.appendLog(d, json.targets);
				} else if (json.msg) {
					if(json.target && $('#room-'+json.target).length == 0) createRoom(json.target);

					appendMsg(json.user, json.msg, json.target);
				}
			} catch (e) {
				playSnd(MoeChat.sounds.errorSnd);
				MoeChat.appendLog($('<div class="chat error panel"><div/>').text('Error "'+e+'" while parsing message: '+msg));
			}
		});

		MoeChat.conn = new WebSocket("ws://moechat.sauyon.com/chat");
		MoeChat.conn.onopen = function() {
			if(MoeChat.options.enableOtr) MoeChat.otr.sendQueryMsg();

			MoeChat.otr.sendMsg("v" + MoeChat.version);

			MoeChat.user.email = localStorage.email ? localStorage.email : '';
			var md5 = $.md5(MoeChat.user.email.toLowerCase().trim());
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			MoeChat.user.img = imgurl;
			$('#email').val(MoeChat.user.email);
			if(MoeChat.user.email) MoeChat.otr.sendMsg("e" + MoeChat.user.email);

			MoeChat.user.name = localStorage.username ? localStorage.username : "anon";
			$('#username').val(MoeChat.user.name);
			MoeChat.otr.sendMsg("u" + MoeChat.user.name);

			MoeChat.sendMsg = function(message) {
				if (!MoeChat.conn) return;
				if (!message) return;

				if(message.indexOf("/") == 0)
					MoeChat.otr.sendMsg('c' + message.substring(1));
				else
					MoeChat.otr.sendMsg('m' + message);
			};

			MoeChat.msgbox.keydown(function (e) {
				if (!e.shiftKey && e.keyCode == 13) {
					e.preventDefault();
					MoeChat.sendMsg(MoeChat.msgbox.val());
					MoeChat.msgbox.val('');
				}
			});
			$('#send-btn').removeClass('disabled').text('Send').click(function() {
				MoeChat.sendMsg(MoeChat.msgbox.val());
				MoeChat.msgbox.val('');
			});
			$('#img-btn').removeClass('disabled');
			$('#msg,#username,#email').prop('disabled', false);
			$('.disconnect.error').last().text('Reconnected.');
		};

		$(window).unload(function() {
			MoeChat.conn.close();
		});

		MoeChat.conn.onclose = function(evt) {
			MoeChat.appendLog($('<div class="chat panel disconnect error">Connection closed.'
			                    + ' <a class="retry-btn">Reconnect?</a></div>'));
			MoeChat.msgbox.keydown(null);
			$('#send-btn').text('Reconnect').click(connect);
			$('.retry-btn').click(connect);
			$('#msg,#username,#email').prop('disabled', true);
		};

		MoeChat.conn.onmessage = function(evt) {
			if(evt.data == 'p') {
				MoeChat.conn.send('p');
				return;
			}

			MoeChat.otr.receiveMsg(evt.data);
		};
	}

	if (window["WebSocket"]) {
		if(localStorage.privkey) {
			MoeChat.privkey = DSA.parsePrivate(localStorage.privkey);
		} else {
			var d = $('<div class="chat notif panel></div>');
			d.text('Generating new key....');
			MoeChat.appendLog(d, [-1]);

			MoeChat.privkey = new DSA();
			localStorage.privkey = MoeChat.privkey.packPrivate();

			d.text('Generating new key.... Done.');
		}

		connect();
	} else {
		MoeChat.appendLog($('<div class="chat error panel"><b>Your browser does not support WebSockets.</b></div>'));
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
		MoeChat.userbox.append(e);

		MoeChat.users[id] = {
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
		MoeChat.users[id].name = newname;
	}

	function changeEmail(id, newemail) {
		if($('#user-'+id).length == 0) return;

		var md5 = $.md5(newemail.toLowerCase().trim());
		var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

		$('#user-'+id+' img').attr('src', imgurl);

		MoeChat.users[id].email = newemail;
		MoeChat.users[id].img = imgurl;
	}

	function switchRoom(id) {
		if(id == MoeChat.roomID) return;
		MoeChat.roomID = id;

		$('#chatroom-column .active').removeClass('active');
		if(id) $('#user-'+id).addClass('active');
		else $('#roombtn-0').addClass('active');

		MoeChat.otr.sendMsg('t'+id);
		$('.room.current').hide().removeClass('current');
		var currentRoom = $('#room-'+id);
		if(currentRoom.length == 0)
			currentRoom = createRoom(id);

		currentRoom.show().addClass('current');
	}

	function createRoom(id) {
		var room = $('<div></div>');
		room.attr('id', 'room-'+id).addClass('room');
		room.append($('<h3>').text(MoeChat.users[id].name));
		room.append($('<div class="log"><div class="msgwrap">'));
		room.hide();
		$('#roomwrap').append(room);

		return room;
	}
});
