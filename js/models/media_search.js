<<<<<<< HEAD
define([
	'underscore',
	'backbone',
	'safe'
], function(_, Backbone, safe) {

	var MediaSearch = Backbone.Model.extend({
		defaults: {
			query: 'pink floyd'
		},

		safe: 'MediaSearch'
	});

	return MediaSearch;
=======
define([
	'underscore',
	'backbone',
	'safe'
], function(_, Backbone, safe) {

	var MediaSearch = Backbone.Model.extend({
		defaults: {
			query: 'pink floyd'
		},

		safe: 'MediaSearch'
	});

	return MediaSearch;
>>>>>>> 06733dbf417cff57bd33aa814287ba470dc15df0
});