var version = 0.7;
$(function() {
	var xhr, conn, username;
	var msg = $("#msg");
	var log = $("#log");
	var usersbox = $("#usersbox");
	var msgwrap = $('#msgwrap');
	function appendLog(msg) {
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
			conn.send("u:" + $('#username').val());
			username = $('#username').val();
		}
	});
	$('#email').focusout(function() {
		localStorage.email = $('#email').val();
		console.log($("#email").val());
		if($('#email').val()) {
			conn.send("e:" + $('#email').val());
		}
	});

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			console.log("Connected!");
			queryUsers();
			if (!localStorage.email) {
				conn.send("e:(blank)");
			} else {
				conn.send("e:" + localStorage.username);
				document.getElementById('email').value = localStorage.email;
			}
			username = "anon" + Math.floor(Math.random() * 1000000);
			if (!localStorage.username) {
				conn.send("u:" + username);
			} else {
				conn.send("u:" + localStorage.username);
				username = localStorage.username;
				document.getElementById('username').value = localStorage.username;
			}
			conn.send("v:" + version);
			$("#form").submit(function() {
				if (!conn) {
					return false;
				}
				if (!msg.val()) {
					return false;
				}
				var findLinks = document.getElementById('msg').value.split(" ");
				for (var i = 0; i < findLinks.length; i++) {
					if (/http(|s):\/\/\S+/i.test(findLinks[i])) {
						findLinks[i] = "[url=" + findLinks[i] + "]" + findLinks[i] + "[/url]";
					}
				}
				conn.send("m:" + findLinks.join(" ").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
				msg.val("");
				return false;
			});
		};

		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
			$('#form').submit(null);
			$('#submitBtn').text('Reconnect').click(function() {location.reload();});
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
					case "userleave":
					case "namechange":
						queryUsers();
						break;
					case "fnamechange":
						username = json.args.newname;
						$('#username').val(username);
						break;
					default: break;
					}
				} else if (json.notif) {
					console.log(json.notif);
					d.html("<i>" + json.notif.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</i>");
				} else if (json.msg) {
					if (json["user"] == username) {
						d.html(parseBBCode("me: " + json["msg"].replace(/</g, "&lt;").replace(/>/g, "&gt;")));
					} else {
						d.html(parseBBCode(json["user"]+": "+json["msg"].replace(/</g, "&lt;").replace(/>/g, "&gt;")));
					}
				}
				d.children().each(function(){
					this.onload = null;
					this.onchange = null;
					this.onclick = null;
				});
				appendLog(d);
			} catch (e) {
				appendLog($('<div class="error"><div/>').text(evt.data));
			}
		};
	} else {
		appendLog($("<div><b>Your browser does not support WebSockets.</b></div>"));
	}

	function queryUsers() {
		xhr = new XMLHttpRequest();
		xhr.open("GET", "http://moechat.sauyon.com/users", true);
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState == 4) {
				document.getElementById('userbox').innerHTML = "";
				var users = eval(xhr.response);
				if (users) {
					users.sort(function (a, b) {
						return a.username.charCodeAt(0) - b.username.charCodeAt(0);
					});
					$('#userbox').html('');
					users.forEach(function (user) {
						var e = $('<div></div>');
						var md5 = $.md5(user.email.toLowerCase().trim());
						var prof = 'http://www.gravatar.com/avatar/'+md5;
						e.html('<div class="user"><img src="'+prof+'"><span>'+user.username+'</span></div>');
						$('#userbox').append(e);
					});
				}
			}
		};
		xhr.send(null);
	}
});
