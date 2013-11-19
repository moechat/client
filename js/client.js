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

			var email = localStorage.email ? localStorage.email : '';
			$('#email').val(email);
			if(email) conn.send("e:" + email);

			username = localStorage.username ? localStorage.username : "anon" + Math.floor(Math.random() * 1000000);
			$('#username').val(username);
			conn.send("u:" + username);

			conn.send("v:" + version);
			$("#form").submit(function(evt) {
				evt.preventDefault();
				if (!conn) return;
				if (!msg.val()) return;

				conn.send('m:' + msg.val());
				msg.val('');
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
					d.html("<i>" + html_sanitize(json.notif) + "</i>");
				} else if (json.msg) {
					if (json["user"] == username) {
						d.html(parseBBCode("me: " + html_sanitize(json["msg"])));
					} else {
						d.html(parseBBCode(json["user"]+": "+html_sanitize(json["msg"])));
					}
				}
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
				$('#userbox').html('');
				var users = eval(xhr.response);
				if (users) {
					users.sort(function (a, b) {
						return a.username.charCodeAt(0) - b.username.charCodeAt(0);
					});
					$('#userbox').html('');
					users.forEach(function (user) {
						var e = $('<div></div>');
						var md5 = $.md5(user.email.toLowerCase().trim());
						var prof = 'http://www.gravatar.com/avatar/'+md5+'?d=identicon';
						e.html('<div class="user"><img src="'+prof+'"><span><br/ >'+user.username+'</span></div>');
						$('#userbox').append(e);
					});
				}
			}
		};
		xhr.send(null);
	}
});
