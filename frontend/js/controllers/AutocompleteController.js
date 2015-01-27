'use strict';

define(['./module'], function(controllers) {

	controllers.controller('AutocompleteController', 
		['$scope', 'AutocompleteService', function($scope, AutocompleteService) {

		$scope.autocomplete = {
			items: []
		};

		$scope.selectItem = function(item) {
			$scope.autocomplete.activeItem = item;
		};

		$scope.getAutocompleteData = function(searchValue) {
			$scope.autocomplete.items = [];

			if ($scope.menu.activeTab.param == 'artist') {
				$scope.getArtists(searchValue);
			} else if ($scope.menu.activeTab.param == 'geo') {
				$scope.getCities(searchValue);
			}
		};

		$scope.getArtists = function(artist) {
			AutocompleteService.getArtistsData(artist).success(function(data) {
				if (typeof data.results != 'undefined') {
					var res = data.results.artistmatches.artist;

					if (typeof res != 'undefined' && res.length) {
						$scope.autocomplete.items = res;
					}
				}
			});
		};

		$scope.getCities = function(city) {
			AutocompleteService.getCitiesData(city).success(function(data) {
				if (data.length) {
					$scope.autocomplete.items = [];
					data.length = 5;

					data.forEach(function(value) {
						var res = value.split(', ');
						
						$scope.autocomplete.items.push({
							name: res[0], 
							meta: res[2]
						});
					});
				}
			});
		};

		$scope.$on('resetAutocomplete', function() {
			$scope.autocomplete.items = [];
		});

	}]);

});