<<<<<<< HEAD
define([
	'underscore',
	'backbone',
	'models/youtube_item'
], function(_, Backbone, YoutubeItemModel) {
   
    var YoutubeSearchResults = Backbone.Collection.extend({
		model: YoutubeItemModel
	});
   
    return YoutubeSearchResults; 
=======
define([
	'underscore',
	'backbone',
	'models/youtube_item'
], function(_, Backbone, YoutubeItemModel) {
   
    var YoutubeSearchResults = Backbone.Collection.extend({
		model: YoutubeItemModel
	});
   
    return YoutubeSearchResults; 
>>>>>>> 06733dbf417cff57bd33aa814287ba470dc15df0
});