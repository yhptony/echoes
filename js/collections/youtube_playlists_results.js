<<<<<<< HEAD
define([
	'underscore',
	'backbone',
	'models/youtube_playlist_item'
], function(_, Backbone, YoutubePlaylistItemModel) {
   
    var YoutubePlaylistSearchResults = Backbone.Collection.extend({
		model: YoutubePlaylistItemModel
	});
   
    return YoutubePlaylistSearchResults; 
=======
define([
	'underscore',
	'backbone',
	'models/youtube_playlist_item'
], function(_, Backbone, YoutubePlaylistItemModel) {
   
    var YoutubePlaylistSearchResults = Backbone.Collection.extend({
		model: YoutubePlaylistItemModel
	});
   
    return YoutubePlaylistSearchResults; 
>>>>>>> 06733dbf417cff57bd33aa814287ba470dc15df0
});