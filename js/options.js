var MoeChat, $, Audio, localStorage;

MoeChat.version = '0.0.17';

MoeChat.initOptions = function() {
	if(localStorage.options) {
		MoeChat.options = $.parseJSON(localStorage.options);
	} else {
		MoeChat.options = {};
		MoeChat.options.msgRcvSnd = '/sounds/talitha.mp3';
		MoeChat.options.msgSendSnd = false;
		MoeChat.options.errorSnd = '/sounds/Error.mp3';
		MoeChat.options.enableOtr = true;

		localStorage.options = JSON.stringify(MoeChat.options);
	}

	MoeChat.sounds = {};
	MoeChat.sounds.msgRcv = new Audio(MoeChat.options.msgRcvSnd);
	MoeChat.sounds.msgSend = new Audio(MoeChat.options.msgSendSnd);
	MoeChat.sounds.error = new Audio(MoeChat.options.errorSnd);

	$('#enable-mitm').prop('checked', MoeChat.options.enableOtr);
};

$(document).on('close', '[data-reveal]', function() {
	var modal = $(this);

	if(modal.attr('id') == 'settings-modal') {
		if(MoeChat.options.enableOtr != modal.Children('#enable-mitm').prop('checked')) {
			MoeChat.options.enableOtr = !MoeChat.options.enableOtr;
			if(MoeChat.options.enableOtr) {
				MoeChat.otr.sendQueryMsg();
			} else {
				MoeChat.otr.endOtr();
			}
		}

		localStorage.options = JSON.stringify(MoeChat.options);
	}
});
