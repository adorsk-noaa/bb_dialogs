define([
	"jquery",
	"use!backbone",
	"use!underscore",
	"use!ui",
	"./dialog",
		],
function($, Backbone, _, ui, DialogView){

	var ModalDialogView = DialogView.extend({

		events: {
		},

		initialize: function(){
			DialogView.prototype.initialize.call(this, arguments);
			this.renderDialogOverlay();
		},

		renderDialogOverlay: function(){
			$(this.el).append($('<div class="dialog-overlay" style="display: none; z-index:' + (this.model.get('zIndex') - 1)  + ';"></div>'));
		},

		show: function(opts){
			$('.dialog-overlay', this.el).fadeIn();
			DialogView.prototype.show.call(this, opts);
		},

		hide: function(opts){
			$('.dialog-overlay', this.el).fadeOut();
			DialogView.prototype.hide.call(this, opts);
		},

	});

	return ModalDialogView;
});
		
