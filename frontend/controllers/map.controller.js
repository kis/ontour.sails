angular.module('ontour', []).controller('MapController', function($scope) {
	console.log('111');

	/*kirillstyopkin.h29f88g0
	zr0njcqy
	4l7djmvo*/

	$scope.cluster = new L.MarkerClusterGroup();

	$scope.map = L.mapbox.map('map', 'examples.map-i87786ca', {
			minZoom: 2,
		    maxZoom: 14
		});

	$scope.map.setView([0, 0], 2).zoomControl.setPosition('bottomright');

	$scope.map.addLayer($scope.cluster);

	$scope.resetCluster = function() {
		$scope.map.removeLayer($scope.cluster);
		$scope.cluster = new L.MarkerClusterGroup();
		$scope.map.addLayer($scope.cluster);
	};

	$scope.ontourDate = (new Date()).getFullYear();

});
