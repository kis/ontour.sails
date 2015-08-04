angular.module('ontour').controller('LandingController', 
function ($scope, $http) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		if (!$scope.regform.$invalid) {
			console.log($scope.user);
			$http.post('/register', $scope.user);
		}
	};

	$scope.submitLogin = function() {
		if (!$scope.loginform.$invalid) {
			$scope.user.username = $scope.user.email;
			console.log($scope.user);
			$http.post('/login', $scope.user);
		}
	};

});
