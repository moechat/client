var MoeChat, $, OTR, WebSocket, localStorage;

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
				MoeChat.playSnd(MoeChat.sounds.errorSnd);
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
						MoeChat.appendUser(json.args.name, json.args.email, json.args.id);
					break;
				case "userleave":
					if(json.args.id != MoeChat.user.ID)
						MoeChat.removeUser(json.args.id);
					break;
				case "namechange":
					if(json.args.id != MoeChat.user.ID)
						MoeChat.changeName(json.args.id, json.args.newname);
					break;
				case "fnamechange":
					MoeChat.user.name = json.args.newname;
					$('#username').val(MoeChat.user.name);
					break;
				case "emailchange":
					if(json.args.id != MoeChat.user.ID)
						MoeChat.changeEmail(json.args.id, json.args.email);
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
				if(json.target && $('#room-'+json.target).length == 0) MoeChat.appendRoom(json.target);

				MoeChat.appendMsg(json.user, json.msg, json.target);
			}
		} catch (e) {
			MoeChat.playSnd(MoeChat.sounds.errorSnd);
			MoeChat.appendLog($('<div class="chat error panel"><div/>').text('Error "'+e+'" while parsing message: '+msg));
		}
	});

	MoeChat.otr.on('error', function(msg) {
		MoeChat.playSnd(MoeChat.sounds.errorSnd);
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

		MoeChat.dom.msgbox.keydown(function (e) {
			if (!e.shiftKey && e.keyCode == 13) {
				e.preventDefault();
				MoeChat.sendMsg(MoeChat.msgbox.val());
				MoeChat.dom.msgbox.val('');
			}
		});
		$('#send-btn').removeClass('disabled').text('Send').click(function() {
			MoeChat.sendMsg(MoeChat.msgbox.val());
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
