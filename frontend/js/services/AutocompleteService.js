'use strict';

define(['./module'], function(services) {

	services.factory('AutocompleteService', ['$http', function($http) {

		function getArtistsData(artist) {
			return $http({
			 	method: 'GET', 
			 	url: 'http://ws.audioscrobbler.com/2.0/',
			 	params: {
			 		method: 'artist.search',
			 		artist: artist,
			 		limit: 5,
			 		api_key: 'dd349d2176d3b97b8162bb0c0e583b1c',
			 		format: 'json'
			 	}
			 });
		}

		function getCitiesData(city) {
			return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&q="+city);
		}

		return {
			getArtistsData: getArtistsData,
			getCitiesData: getCitiesData
		};

	}]);

});