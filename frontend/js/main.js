'use strict';

require.config({
	shim: {
		angular: {
			exports: 'angular'
		},
		animate: {
			deps: [
				'angular'
			],
			exports: 'animate'
		},
		cluster: {
			deps: [
				'mapbox'
			]
		}
	},

	paths: {
		angular		: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.13/angular',
		mapbox 		: 'https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox',
		cluster 	: 'https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster',
		animate		: 'vendor/angular-animate.min'
	}
});

require(['App'], function(App) {
	angular.bootstrap(document, ['App']);
});