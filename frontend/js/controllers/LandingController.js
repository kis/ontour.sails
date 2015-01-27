var ontour = angular.module('ontour', []);

ontour.controller('LandingController', ['$scope', '$http', function ($scope, $http) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		if (!$scope.regform.$invalid) {
			console.log($scope.user);

			$http.post('/register', $scope.user);
		}
	};

	$scope.submitLogin = function() {
		if (!$scope.loginform.$invalid) {
			console.log($scope.user);

			$http.post('/login', $scope.user);
		}
	};

}])
.directive('passwordRepeat', function() {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function() {
				if (scope.regform.password.$viewValue != ctrl.$viewValue) {
					ctrl.$setValidity('passwordRepeat', false);
				} else {
					ctrl.$setValidity('passwordRepeat', true);
				}
			});
		}
	};
});
