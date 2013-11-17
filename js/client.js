$(function() {
	var conn;
	var msg = $("#msg");
	var log = $("#log");
	var username;
	// var firstTime = true;
	function appendLog(msg) {
		var d = log[0];
		var doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
		document.getElementById('log').appendChild(msg.split(" ").join("%20"));
		if (doScroll) {
			d.scrollTop = d.scrollHeight - d.clientHeight;
		}
	}

	if (window["WebSocket"]) {
		conn = new WebSocket("ws://moechat.sauyon.com/chat");
		conn.onopen = function() {
			conn.send("e:asdf@test.com");
			username = Math.floor(Math.random() * 100000000);
			conn.send("u:anon" + username);
			conn.send("v:0.1");
			$("#form").submit(function() {
				if (!conn) {
					return false;
				}
				if (!msg.val()) {
					return false;
				}
				conn.send("m:" + document.getElementById('msg').value);
				msg.val("");
				return false;
			});
		};
		conn.onclose = function(evt) {
			appendLog($("<div><b>Connection closed.</b></div>"));
			$("#form").submit(function() {return false;});
		}
		conn.onmessage = function(evt) {
			//try {
				var json = JSON.parse(evt.data);
				var d = document.createElement("div");
				if (json.error) {
					d.innerHTML = "<b>" + json.error + "</b>";
				} else {
					if (json["u"] == "anon" + username) {
						d.innerHTML = parseBBCode("me: " + json["m"]);
					} else {
						d.innerHTML = parseBBCode(json["u"] + ": " + json["m"]);
					}
				}
				appendLog(d);
			// } catch (e) {
				// appendLog($("<div/>").text(evt.data));
			// }
		}
	} else {
		appendLog($("<div><b>Your browser does not support WebSockets.</b></div>"));
	}
});
