var $;

var MoeChat = {};
MoeChat.options = {};
MoeChat.sounds = {};
MoeChat.user = {};
MoeChat.users = {};
MoeChat.dom = {};

MoeChat.playSnd = function(snd) {
	snd.pause();
	snd.currentTime = 0;
	snd.play();
};

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

MoeChat.appendMsg = function(uid, msg, room) {
	var log = $('#room-'+room+' .log');
	var msgwrap = $('#room-'+room+' .msgwrap');

	if (uid != MoeChat.user.ID) MoeChat.playSnd(MoeChat.sounds.msgRcvSnd);

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
};

MoeChat.queryUsers = function() {
	$.ajax('http://moechat.sauyon.com/users', {
		async: false,
		crossDomain: false,
		success: function(data) {
			if (!data) return;
			MoeChat.dom.userbox.html('');
			data.forEach(function (user) {
				MoeChat.appendUser(user.username, user.email, user.id);
			});
		}
	});
};

MoeChat.appendUser = function(username, email, id) {
	if($('#user-'+id).length != 0) return false;

	var e = $('<div></div>');
	var md5 = $.md5(email.toLowerCase().trim());
	var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

	e.attr('id', 'user-'+id).addClass('userbtn').data('id', id);
	e.html('<img src="'+imgurl+'">');
	e.append($('<span class="name">').text(username));
	e.click(function(evt) { MoeChat.switchRoom(id); });
	MoeChat.dom.userbox.append(e);

	MoeChat.users[id] = {
		name: username,
		email: email,
		img: imgurl
	};

	return e;
};

MoeChat.removeUser = function(id) {
	$('#user-'+id).remove();
};

MoeChat.changeName = function(id, newname) {
	$('#user-'+id+' .name').text(newname);
	MoeChat.users[id].name = newname;
};

MoeChat.changeEmail = function(id, newemail) {
	if($('#user-'+id).length == 0) return;

	var md5 = $.md5(newemail.toLowerCase().trim());
	var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

	$('#user-'+id+' img').attr('src', imgurl);

	MoeChat.users[id].email = newemail;
	MoeChat.users[id].img = imgurl;
};

MoeChat.switchRoom = function(id) {
	if(id == MoeChat.roomID) return;
	MoeChat.roomID = id;

	$('#chatroom-column .active').removeClass('active');
	if(id) $('#user-'+id).addClass('active');
	else $('#roombtn-0').addClass('active');

	MoeChat.otr.sendMsg('t'+id);
	$('.room.current').hide().removeClass('current');
	var currentRoom = $('#room-'+id);
	if(currentRoom.length == 0)
		currentRoom = MoeChat.appendRoom(id);

	currentRoom.show().addClass('current');
};

MoeChat.appendRoom = function(id) {
	var room = $('<div></div>');
	room.attr('id', 'room-'+id).addClass('room');
	room.append($('<h3>').text(MoeChat.users[id].name));
	room.append($('<div class="log"><div class="msgwrap">'));
	room.hide();
	$('#roomwrap').append(room);

	return room;
};

