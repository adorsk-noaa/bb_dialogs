define([
	"jquery",
	"use!backbone",
	"use!underscore",
	"use!ui",
	"text!./templates/dialog.html",
		],
function($, Backbone, _, ui, template){

	var DialogView = Backbone.View.extend({

		tagName: "div",

		events: {
		},

		initialize: function(){
			this.renderDialogSkeleton();
			this.renderDialogHeader();
			this.renderDialogBody();
			this.renderDialogFooter();

			$(this.el).addClass("dialog-container");

			this.onZIndexChange();
			this.onWidthChange();

			this.model.on('change:zIndex', this.onZIndexChange, this);
			this.model.on('change:width', this.onWidthChange, this);
		},

		renderDialogSkeleton: function(){
			var skeleton_html = _.template(template, {model: this.model.toJSON()});
			$(this.el).html(skeleton_html);

			$(this.el).draggable({
				handle: '.dialog-header', 
				cursor: 'move' 
			});

			return this;
		},

		renderDialogHeader: function(){
			$('.dialog-header', this.el).html(this.model.get('title'));
		},

		renderDialogBody: function(){
		},

		renderDialogFooter: function(){
		},

		show: function(opts){
			if (opts === undefined){opts = {};}
			if (opts.noReposition === undefined){opts.noReposition = false;}

			if (! opts.noReposition){
				$(this.el).css("top", Math.round($(window).height() - $(this.el).height()) / 2 + "px");
				$(this.el).css("left", Math.round($(window).width() - $(this.el).width()) / 2 + "px");
			}

			$(this.el).fadeIn();
		},

		hide: function(){
			$(this.el).fadeOut();
		},

		onZIndexChange: function(){
			$(this.el).css('zIndex', this.model.get('zIndex'));
		},

		onWidthChange: function(){
			$(this.el).css('width', this.model.get('width'));
		},


	});

	return DialogView;
});
		
