$(function() {
	var conn;
	var msg = $("#msg");
	var log = $("#log");
	var username;
	// var firstTime = true;
	function appendLog(msg) {
		var d = log[0];
		var doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
		document.getElementById('log').appendChild(msg);
		if (doScroll) {
			d.scrollTop = d.scrollHeight - d.clientHeight;
		}
	}

	$('#username').focusout(function() {
		if($('#username').val()) {
			window.conn.send("u:"+$('#username').val());
			username = $('#username').val();
		}
	});

	if (window["WebSocket"]) {
		window.conn = new WebSocket("ws://moechat.sauyon.com/chat");
		window.conn.onopen = function() {
			window.conn.send("e:asdf@test.com");
			username = "anon" + Math.floor(Math.random() * 1000000);
			// username = "KevZho";
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
			appendLog($("<div><b>Window.Connection closed.</b></div>"));
			$("#form").submit(function() {return false;});
		};

		window.conn.onmessage = function(evt) {
			console.log(evt);
			try {
				var json = JSON.parse(evt.data);
				var d = $('<div></div>');
				if (json.error) {
					d.html("<b>" + json.error + "</b>");
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
				appendLog($("<div><div/>").text(evt.data));
			}
		};
	} else {
		appendLog($("<div><b>Your browser does not support WebSockets.</b></div>"));
	}
});
