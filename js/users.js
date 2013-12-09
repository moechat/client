/*global MoeChat, $ */

MoeChat.User = function(id, name, email) {
	this.id = id;
	this.name = name;
	this.email = email;
	var md5 = MoeChat.md5(this.email.toLowerCase().trim());
	var img = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
	this.img = img;
};

MoeChat.User.prototype.append = function() {
	if($('#user-'+this.id).length != 0) return false;

	var e = $('<div></div>');
	var md5 = MoeChat.md5(this.email.toLowerCase().trim());
	var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

	e.attr('id', 'user-'+this.id).addClass('userbtn').data('id', this.id);
	e.html('<img src="'+imgurl+'">');
	e.append($('<span class="name">').text(this.name));
	e.click(function(evt) { MoeChat.switchRoom(this.id); });
	MoeChat.dom.userbox.append(e);

	return e;
};

MoeChat.User.prototype.remove = function() {
	$('#user-'+this.id).remove();
	delete MoeChat.users[this.id];
};

MoeChat.User.prototype.setId = function(id) {
	this.id = id;
};

MoeChat.User.prototype.setName = function(newname) {
	this.name = newname;
	$('#user-'+this.id+' .name').text(newname);
};

MoeChat.User.prototype.setEmail = function(newemail) {
	this.email = newemail;

	if($('#user-'+this.id).length == 0) return;

	var md5 = MoeChat.md5(newemail.toLowerCase().trim());
	var imgurl = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';

	$('#user-'+this.id+' img').attr('src', imgurl);

	MoeChat.users[this.id].email = newemail;
	MoeChat.users[this.id].img = imgurl;
};

MoeChat.queryUsers = function() {
	$.ajax('http://moechat.sauyon.com/users', {
		async: false,
		crossDomain: false,
		success: function(data) {
			if (!data) return;
			MoeChat.dom.userbox.html('');
			data.forEach(function (user) {
				MoeChat.users[user.id] = new MoeChat.User(user.id, user.username, user.email);
				MoeChat.users[user.id].append();
			});
		}
	});
};
