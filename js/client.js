$(function() {
	var conn;
	var msg = $('#msg');
	var log = $('#log');
	var msgwrap = $('#msgwrap');
	var nameinput = $('#username');
	var form = $('#form');
	var username;

	nameinput.focusout(function() {
		if(nameinput.val() && nameinput.val() != username) {
			conn.send("u:"+nameinput.val());
			username = nameinput.val();
		}
	});

	function appendLog(msg) {
		var doScroll = log.scrollTop() == msgwrap.height() - log.height;
		msgwrap.append(msg);
		if (doScroll) {
			log.scrollTop(msgwrap.height() - log.height);
		}
	}

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			conn.send("e:asdf@test.com");
			username = "anon" + Math.floor(Math.random() * 1000000);
			conn.send("u:" + username);
			conn.send("v:0.3");
			form.submit(function() {
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
			form.submit(function() {return false;});
		};

		conn.onmessage = function(evt) {
			console.log(evt);
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
});
