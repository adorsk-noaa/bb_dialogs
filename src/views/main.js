define([
	"./dialog",
	"./modal_dialog"
], 
function(DialogView, ModalDialogView){

	views = {
		'DialogView': DialogView,
		'ModalDialogView': ModalDialogView
	};

	return views;

});
