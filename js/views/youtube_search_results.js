<<<<<<< HEAD
define([
	'jquery',
	'underscore',
	'backbone',
	'views/youtube_item',
	'collections/youtube_search_results',
	'collectionView'
], function($, _, Backbone, YoutubeItemView, YoutubeSearchResultsList, CollectionView) {
	
	var SearchResults = CollectionView.extend({
		tagName: 'ul',

		className: 'clearfix unstyled',
		
		collection: YoutubeSearchResultsList,

		view: YoutubeItemView,

		broadcasts: {
			'media-clicked': 'onSelected'
		},

		render: function() {
			this.$el.fadeOut(300, _.bind(this.renderCollection, this));
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
	'views/youtube_item',
	'collections/youtube_search_results',
	'collectionView'
], function($, _, Backbone, YoutubeItemView, YoutubeSearchResultsList, CollectionView) {
	
	var SearchResults = CollectionView.extend({

		collection: YoutubeSearchResultsList,

		view: YoutubeItemView,

		broadcasts: {
			'media-clicked': 'onSelected'
		},

		render: function() {
			this.$el.fadeOut(300, _.bind(this.renderCollection, this));
			return this;
		},

		onSelected: function(ev) {
			this.trigger('search-result-selected', ev);
		}
	});

    return SearchResults;
>>>>>>> 06733dbf417cff57bd33aa814287ba470dc15df0
});