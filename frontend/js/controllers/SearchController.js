'use strict';

define(['./module'], function(controllers) {

	controllers.controller('SearchController', ['$scope', 'SearchService', function($scope, SearchService) {

		$scope.searchStatus = false;

		$scope.events = [];

		$scope.lastEvents = [];

		$scope.pages = {
			page: 0,
			total: 1,
			totalPages: 1
		};

		$scope.pages_orig = angular.copy($scope.pages);

		$scope.search = function(item) {
			$scope.reset();
			$scope.menu.searchValue = item;
			$scope.nextPage();
		};

		$scope.nextPage = function() {
			if ($scope.pages.page < $scope.pages.totalPages && $scope.menu.searchValue) {
				$scope.pages.page++;

				$scope.searchStatus = true;

				SearchService.search({
					param         : $scope.menu.activeTab.param, 
					location      : $scope.menu.searchValue, 
					artist        : $scope.menu.searchValue, 
					festivalsOnly : $scope.menu.festivalsOnly, 
					tag 		  : $scope.menu.activeTag, 
					page 		  : $scope.pages.page
				})
				.success(function(response) {
					$scope.searchStatus = false;
					
					if (response.error == 8 || 
						typeof response.events == 'undefined' || 
						response.events.total == 0) {
							return false;
					}

					$scope.getEvents(response);
				});
			}
		};

		$scope.getEvents = function(data) {
			$scope.pages.totalPages = data.events["@attr"].totalPages;
			$scope.pages.total = data.events["@attr"].total;
			$scope.lastEvents = data.events.event;
		};

		$scope.reset = function() {
			$scope.$broadcast('resetPaths');
			$scope.events = [];
			$scope.lastEvents = [];
			$scope.pages = angular.copy($scope.pages_orig);
			$scope.$broadcast('resetAutocomplete');
		};

	}]);

});