<<<<<<< HEAD
define([
	'jquery',
	'underscore',
	'backbone',
	'views/youtube_playlist_item',
	'collections/youtube_playlists_results',
	'collectionView'
], function($, _, Backbone, YoutubePlaylistItemView, YoutubePlaylistsResults, CollectionView) {
	
	var SearchResults = CollectionView.extend({
		tagName: 'ul',

		className: 'clearfix unstyled',
		
		collection: YoutubePlaylistsResults,
		
		view: YoutubePlaylistItemView,

		broadcasts: {
			'media-clicked': 'onSelected'
		},

		render: function() {
			this.$el.fadeOut(200, _.bind(this.renderCollection, this));
			return this;
		},

		onSelected: function(ev) {
			this.trigger('search-result-selected', ev);
		}
	});

    return SearchResults;
=======
define([
	'jquery',
	'underscore',
	'backbone',
	'views/youtube_playlist_item',
	'collections/youtube_playlists_results',
	'collectionView'
], function($, _, Backbone, YoutubePlaylistItemView, YoutubePlaylistsResults, CollectionView) {
	
	var SearchResults = CollectionView.extend({

		collection: YoutubePlaylistsResults,
		
		view: YoutubePlaylistItemView,

		broadcasts: {
			'media-clicked': 'onSelected'
		},

		render: function() {
			this.$el.fadeOut(200, _.bind(this.renderCollection, this));
			return this;
		},

		onSelected: function(ev) {
			this.trigger('search-result-selected', ev);
		}
	});

    return SearchResults;
>>>>>>> 06733dbf417cff57bd33aa814287ba470dc15df0
});