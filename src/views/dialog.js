define([
	"jquery",
	"use!backbone",
	"use!underscore",
	"use!ui",
	"text!./templates/dialog.html",
		],
function($, Backbone, _, ui, template){

	var DialogView = Backbone.View.extend({

		events: {
		},

		initialize: function(){
			this.renderDialogSkeleton();
			this.renderDialogHeader();
			this.renderDialogBody();
			this.renderDialogFooter();

			this.model.on('change:zIndex', this.onZIndexChange, this);
			this.model.on('change:width', this.onWidthChange, this);
		},

		renderDialogSkeleton: function(){
			var skeleton_html = _.template(template, {model: this.model.toJSON()});
			$(this.el).html(skeleton_html);

			$('.dialog-container', this.el).draggable({
				handle: '.dialog-header', 
				cursor: 'move' 
			});

			return this;
		},

		renderDialogHeader: function(){
		},

		renderDialogBody: function(){
		},

		renderDialogFooter: function(){
		},

		show: function(opts){
			if (opts === undefined){opts = {};}
			if (opts.noReposition === undefined){opts.noReposition = false;}

			if (! opts.noReposition){
				$('.dialog-container', this.el).css("top", Math.round($(window).height() - $('.dialog-container', this.el).height()) / 2 + "px");
				$('.dialog-container', this.el).css("left", Math.round($(window).width() - $('.dialog-container', this.el).width()) / 2 + "px");
			}

			$('.dialog-container', this.el).fadeIn();
		},

		hide: function(){
			$('.dialog-container', this.el).fadeOut();
		},

		onZIndexChange: function(){
			$('.dialog-container', this.el).css('zIndex', this.model.get('zIndex'));
		},

		onWidthChange: function(){
			$('.dialog-container', this.el).css('width', this.model.get('width'));
		},


	});

	return DialogView;
});
		
