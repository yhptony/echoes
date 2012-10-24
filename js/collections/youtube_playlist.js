define([
	'underscore',
	'backbone',
	'../models/youtube_item'
], function(_, Backbone, YoutubeItem) {
   
    var YoutubePlaylist = Backbone.Collection.extend({

    	model: YoutubeItem,

    	updateUrl: function(url) {

    	},

    	url: function() {
    		return this.
    	}

    });
   
    return YoutubePlaylist; 
});