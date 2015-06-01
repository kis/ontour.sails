angular.module('ontour').directive('searchBar', [function () {
	return {
		restrict: 'E',
		replace: true,
		// templateUrl: 'search-bar.html',
		link: function (scope, el, attrs) {

			console.log(scope);
			console.log(el);
			console.log(attrs);
			
		}
	};
}]);