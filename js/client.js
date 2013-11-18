var version = 0.5;
$(function() {
	var xhr, conn, username;
	var msg = $("#msg");
	var log = $("#log");
	var usersbox = $("#usersbox");
	var msgwrap = $('#msgwrap');
	function appendLog(msg) {
		var doScroll = log.scrollTop() = document.getElementById('msgwrap') - log.height;
		msgwrap.append(msg);
		if (doScroll) {
			log.scrollTop(msgwrap.height() - log.height);
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
			conn.send("v:" + version);
			if (!localStorage.username) {
				conn.send("u:" + username);
			} else {
				conn.send("u:" + localStorage.username);
				username = localStorage.username;
				document.getElementById('username').value = localStorage.username;
			}
			$("#form").submit(function() {
				if (!conn) {
					return false;
				}
				if (!msg.val()) {
					return false;
				}
				console.log("m:%s", document.getElementById('msg').value);
				conn.send("m:" + document.getElementById('msg').value);
				msg.val("");
				return false;
			});
		};

		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
			form.submit = function() {return false;};
			document.getElementById('submitBtn').onclick = function() {location.reload()};
			document.getElementById('submitBtn').innerHTML = "Reconnect";
			document.getElementById('msg').disabled = true;
			document.getElementById('username').disabled = true;
			document.getElementById('email').disabled = true;
		};

		conn.onmessage = function(evt) {
			console.log(evt);
			try {
				var json = $.parseJSON(evt.data);
				var d = $('<div></div>');
				if (json.error) {
					d.html("<b>" + json.error + "</b>");
					d.addClass('error');
				} else if (json.notif) {
					d.html("<i>" + json.notif + "</i>");
				} else {
					if (json["user"] == username) {
						d.html(parseBBCode("me: " + json["msg"]));
					} else {
						d.html(parseBBCode(json["user"] + ": " + json["msg"]));
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
					users.sort(function (a, b) {return a.username.charCodeAt(0) - b.username.charCodeAt(0)});
					users.forEach(function (user) {
						document.getElementById('userbox').innerHTML += ("<p>" + user.username + "</p>");
					});
				}
			}
		};
		xhr.send(null);
	}
	setInterval(queryUsers, 10000);
	window["conn"] = conn;
});
