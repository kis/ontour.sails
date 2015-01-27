'use strict';

define(['./module'], function(controllers) {

	controllers.controller('MenuController', ['$scope', function($scope) {

		$scope.menu = {
			activeTab: {
				title: 'название группы / артиста',
				param: 'artist'
			},
			searchValue: '',
			activeTag: '',
			festivalsOnly: 0
		};

		$scope.tabTitles = [
			{
				name: 'Артист',
				title: 'название группы / артиста',
				param: 'artist'
			},
			{
				name: 'Город',
				title: 'город / страну / континент',
				param: 'geo'
			}
		];

		$scope.tabs = [
			{
				title: 'название группы / артиста',
				param: 'artist'
			},
			{
				title: 'город / страну / континент',
				param: 'geo'
			}
		];

		$scope.switchTab = function(tab) {
			$scope.menu.activeTab = tab;
			$scope.menu.searchValue = '';
		};

		$scope.tags = ['rock', 'pop', 'alternative', 'indie', 'electronic', 
			'classic rock', 'hip-hop', 'dance', 'jazz'];

		$scope.switchTag = function(tag) {
			$scope.menu.activeTag = $scope.menu.activeTag == tag ? '' : tag;
		};

		$scope.setFestivalsOnly = function() {
			$scope.menu.festivalsOnly = $scope.menu.festivalsOnly == 0 ? 1 : 0;
		};

	}]);

});