'use strict';

define(['./module'], function(services) {

	services.factory('SearchService', ['$http', function($http) {

		function search(params) {
			return 	$http({
				url: 'http://ws.audioscrobbler.com/2.0/',
				method: 'GET',
				params: {
					method        : params.param + '.getevents',
					location      : params.location,
					artist        : params.artist,
					autocorrect   : 1,
					festivalsonly : params.festivalsOnly,
					tag           : params.tag,
					page 		  : params.page,
					limit	      : 10,
					api_key  	  : 'dd349d2176d3b97b8162bb0c0e583b1c',
					format 		  : 'json'
				}
			});
		}

		return {
			search: search
		};

	}]);

});