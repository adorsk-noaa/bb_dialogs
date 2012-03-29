define([
	"use!backbone",
], 
function(Backbone){

var DialogModel = Backbone.Model.extend({

	defaults: {
		title: '',
		zIndex: 0,
		width: 400,
	},

	initialize: function(){
	}

});
return DialogModel;

});

