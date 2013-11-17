$(function() {
	var conn;
	var msg = $("#msg");
	var log = $("#log");
	// var username;
	// var firstTime = true;
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
			conn.send("e:asdf@test.com");
			conn.send("u:" + "me");
			$("#form").submit(function() {
				// if (firstTime) {
					// firstTime = false;
					// document.getElementById('username').disabled = true;
					// username = document.getElementById('username').value;
				// }
				if (!conn) {
					return false;
				}
				if (!msg.val()) {
					return false;
				}
				// var json = {
					// "m:": msg.val()
				// };
				//console.log(json);
				console.log("m:%s", document.getElementById('msg').value);
				conn.send("m:" + document.getElementById('msg').value);
				msg.val("");
				return false;
			});
		};
		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
		}
		conn.onmessage = function(evt) {
			console.log(evt);
			//try {
				var json = JSON.parse(evt.data);
				appendLog($("<div/>").text(parseBBCode(json["u"] + ": " + json["m"])));
			// } catch (e) {
				// appendLog($("<div/>").text(evt.data));
			// }
		}
	} else {
		appendLog($("<div><b>Your browser does not support WebSockets.</b></div>"));
	}
});
