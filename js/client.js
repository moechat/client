$(function() {
	var conn;
	var msg = $("#msg");
	var log = $("#log");
	function appendLog(msg) {
		var d = log[0];
		var doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
		msg.appendTo(log);
		if (doScroll) {
			d.scrollTop = d.scrollHeight - d.clientHeight;
		}
	}

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		console.log(conn);
		conn.onopen = function() {
			//conn.send("e" + "asdf@test.com");
			//conn.send("u" + "me");
			$("#form").submit(function() {
				if (!conn) {
					return false;
				}
				if (!msg.val()) {
					return false;
				}
				var json = {
					"testingvariable:": "Kevin",
					"m:": msg.val()
				};
				console.log(json);
				conn.send(JSON.stringify(json));
				$('#msg').val("");
				return false;
			});
		};
		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
		}
		conn.onmessage = function(evt) {
			console.log(evt);
			try {
				var json = JSON.parse(evt.data);
				appendLog($("<div/>").text(json["testingvariable:"] + ": " + json["m:"]));
			} catch (e) {
				appendLog($("<div/>").text(evt.data));
			}
		}
	} else {
		appendLog($("<div><b>Your browser does not support WebSockets.</b></div>"));
	}
});
