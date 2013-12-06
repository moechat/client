var MoeChat, $;

$(function(){
	var iframe = $('#img-div iframe');
	var form = $('#img-div form');
	var input = $('#img-div input');

	MoeChat.imgbtn.click(function() {
		input.click();
	});

	input.change(function() {
		MoeChat.server.sendMsg('k');
	});

	MoeChat.imgUpload.action = function(a) {
		form.attr('action', a);
	};

	MoeChat.imgUpload.submit = function() {
		form.submit();

		iframe.unbind().load(function() {
			var response = $(iframe.contentWindow.document.body).html();

			if(response) {

			}
		});
	};
});
