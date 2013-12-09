var MoeChat, $, localStorage, WebSocket, OTR, DSA, Modernizr;

$(function() {
	MoeChat.roomID = 0;

	MoeChat.dom.msgbox = $('#msgbox');
	MoeChat.dom.userbox = $('#userbox');
	MoeChat.dom.imgbtn = $('#img-btn');

	MoeChat.initOptions();
	MoeChat.initImgUploads();

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
			var md5 = MoeChat.md5(MoeChat.user.email);
			var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
			MoeChat.user.img = imgurl;
			localStorage.email = MoeChat.user.email;
			MoeChat.conn.send("e" + MoeChat.user.email);
		}
	});

	$('#roombtn-0').click(function() { MoeChat.switchRoom(0); });

	if (Modernizr.websockets) {
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

		MoeChat.connect();
	} else {
		MoeChat.appendLog($('<div class="chat error panel"><b>Your browser does not support WebSockets.</b></div>'));
	}
});

$(document).foundation();
