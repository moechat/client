var MoeChat, $;

MoeChat = {};

MoeChat.initImgUploads = function() {
	MoeChat.imgUpload = {};

	var form = $('#img-div form');
	var input = $('#img-div input');

	MoeChat.imgbtn.click(function() {
		input.click();
	});

	input.change(function() {
		MoeChat.otr.sendMsg('k');
	});

	MoeChat.imgUpload.submit = function(token) {
		form.attr('action', "//moechat.sauyon.com/upload?type=img&token=" + token);

		form.submit();

		$('#img-div iframe').unbind().load(function() {
			var iframe = window.frames['img-iframe'];
			var response = $(iframe.document.body).text();

			if(response) {
				var d = $('<div class="chat error panel"></div>');
				d.text('Error uploading image: '+response);
				MoeChat.appendLog(d);
			}
		});
	};
};
