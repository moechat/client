/*global MoeChat, $, OTR, WebSocket, localStorage */

MoeChat.connect = function() {
	MoeChat.queryUsers();

	$('.disconnect.error').last().text('Reconnecting...');
	$('#send-btn,#img-btn').addClass('disabled');

	MoeChat.newOtr();
	MoeChat.newWsConn();
};

MoeChat.newOtr = function() {
	MoeChat.otr = new OTR({priv: MoeChat.privkey});

	MoeChat.otr.on('io', function(msg) {
		MoeChat.conn.send(msg);
	});

	MoeChat.otr.on('ui', function(msg) {
		try {
			console.log('Receiving' + msg);
			var d;
			var json = JSON.parse(msg);
			if (json.error) {
				MoeChat.playSnd(MoeChat.sounds.error);
				d = $('<div></div>').addClass('chat error panel');
				d.append($('<b>').text(json.msg));
				MoeChat.appendLog(d, [-1]);
			} else if (json.cmd) {
				switch (json.cmd) {
				case "idset":
					MoeChat.user.setId(json.args.id);
					break;
				case "userjoin":
					if(json.args.id != MoeChat.user.id) {
						MoeChat.users[json.args.id] = new MoeChat.User(json.args.id, json.args.name, json.args.email);
						MoeChat.users[json.args.id].append();
					}
					break;
				case "userleave":
					if(json.args.id != MoeChat.user.id)
						MoeChat.users[json.args.id].remove();
					break;
				case "namechange":
					if(json.args.id != MoeChat.user.id)
						MoeChat.users[json.args.id].setName(json.args.name);
					break;
				case "fnamechange":
					MoeChat.user.name = json.args.newname;
					$('#username').val(MoeChat.user.name);
					break;
				case "emailchange":
					if(json.args.id != MoeChat.user.id)
						MoeChat.users[json.args.id].setEmail(json.args.email);
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
				if(json.user != MoeChat.user.ID) MoeChat.playSnd(MoeChat.sounds.msgRcv);
				if(json.target && $('#room-'+json.target).length == 0) MoeChat.appendRoom(json.target);

				MoeChat.appendMsg(json.user, json.msg, json.target);
			}
		} catch (e) {
			MoeChat.playSnd(MoeChat.sounds.error);
			MoeChat.appendLog($('<div class="chat error panel"><div/>').text('Error "'+e+'" while parsing message: '+msg));
		}
	});

	MoeChat.otr.on('error', function(msg) {
		MoeChat.playSnd(MoeChat.sounds.error);
		var d = $('<div></div>').addClass('chat error panel');
		d.append($('<b>').text(msg));
		MoeChat.appendLog(d, [-1]);
	});
};

MoeChat.newWsConn = function() {
	MoeChat.conn = new WebSocket("ws://moechat.sauyon.com/chat");
	MoeChat.conn.onopen = function() {
		if(MoeChat.options.enableOtr) MoeChat.otr.sendQueryMsg();

		MoeChat.otr.sendMsg("v" + MoeChat.version);

		var name, email;

		name = localStorage.username ? localStorage.username : "anon";
		$('#username').val(name);

		email = localStorage.email ? localStorage.email : '';
		$('#email').val(email);
		if(email) MoeChat.otr.sendMsg("e" + email);

		MoeChat.otr.sendMsg("u" + name);

		MoeChat.user = new MoeChat.User(false, name, email);

		MoeChat.dom.msgbox.keydown(function (e) {
			if (!e.shiftKey && e.keyCode == 13) {
				e.preventDefault();
				MoeChat.sendMsg(MoeChat.dom.msgbox.val());
				MoeChat.dom.msgbox.val('');
			}
		});
		$('#send-btn').removeClass('disabled').text('Send').click(function() {
			MoeChat.sendMsg(MoeChat.dom.msgbox.val());
			MoeChat.dom.msgbox.val('');
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
		MoeChat.dom.msgbox.keydown(null);
		$('#send-btn').text('Reconnect').click(MoeChat.connect);
		$('.retry-btn').click(MoeChat.connect);
		$('#msg,#username,#email').prop('disabled', true);
	};

	MoeChat.conn.onmessage = function(evt) {
		if(evt.data == 'p') {
			MoeChat.conn.send('p');
			return;
		}

		MoeChat.otr.receiveMsg(evt.data);
	};
};

MoeChat.sendMsg = function(message) {
	if (!MoeChat.conn || !message || MoeChat.user.id === false) return;
	MoeChat.playSnd(MoeChat.sounds.msgSend);

	if(message.indexOf("/") == 0)
		MoeChat.otr.sendMsg('c' + message.substring(1));
	else
		MoeChat.otr.sendMsg('m' + message);
};
