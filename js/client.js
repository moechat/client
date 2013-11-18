$(function() {
	var xhr;
	var conn;
	var msg = $("#msg");
	var log = $("#log");
	var usersbox = $("#usersbox");
	var msgwrap = $('#msgwrap');
	var username;

	function appendLog(msg) {
		var doScroll = log.scrollTop() == document.getElementById('msgwrap') - log.height;
		msgwrap.append(msg);
		if (doScroll) {
			log.scrollTop(msgwrap.height() - log.height);
		}
	}
	$('#username').focusout(function() {
		if($('#username').val()) {
			console.log($('#username').val());
			window.conn.send("u:" + $('#username').val());
			username = $('#username').val();
		}
	});
	$('#email').focusout(function() {
		if($('#email').val()) {
			console.log($("#email").val());
			window.conn.send("e:" + $('#email').val());
		}
	});

	if (window["WebSocket"]) {
		window.conn = new WebSocket("ws://moechat.sauyon.com/chat");
		window.conn.onopen = function() {
			window.conn.send("e:(blank)");
			username = "anon" + Math.floor(Math.random() * 1000000);
			window.conn.send("u:" + username);
			window.conn.send("v:0.3");
			$("#form").submit(function() {
				if (!window.conn) {
					return false;
				}
				if (!msg.val()) {
					return false;
				}
				console.log("m:%s", document.getElementById('msg').value);
				window.conn.send("m:" + document.getElementById('msg').value);
				msg.val("");
				return false;
			});
		};

		window.conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
			form.submit(function() {return false;});
		};

		window.conn.onmessage = function(evt) {
			console.log(evt);
			queryUsers();
			try {
				var json = JSON.parse(evt.data);
				var d = $('<div></div>');
				if (json.error) {
					d.html("<b>" + json.error + "</b>");
					d.addClass('error');
				} else {
					if (json["u"] == username) {
						d.html(parseBBCode("me: " + json["m"]));
					} else {
						d.html(parseBBCode(json["u"] + ": " + json["m"]));
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
				users.sort(function (a, b) {return a.username.charCodeAt(0) - b.username.charCodeAt(0)});
				users.forEach(function (user) {
					document.getElementById('userbox').innerHTML += ("<p>" + user.username + "</p>");
				});
			}
		};
		xhr.send(null);
	}
	setInterval(queryUsers, 10000);
});
