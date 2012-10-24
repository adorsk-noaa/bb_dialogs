define([
	"jquery",
	"backbone",
	"underscore",
	"ui",
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

			if (this.model.get('draggable')){
				$(this.el).draggable({
					handle: '.dialog-header', 
					cursor: 'move' 
				});
				$(this.el).css('position', 'fixed');
			}

			if (this.model.get('resizable')){
				var _this = this;
				$('.dialog-frame', this.el).resizable({
					alsoResize: $('.dialog-body', this.el),
					resize: function(){_this.onResize()},
					stop: function(){_this.onResizeStop()}
				});
			}

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

		onResize: function(){
		},

		onResizeStop: function(){
		}


	});

	return DialogView;
});
		
