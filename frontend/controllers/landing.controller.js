angular.module('ontour').controller('LandingController', 
function ($scope, $http) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		if (!$scope.regform.$invalid) {
			console.log($scope.user);
			$http({
				url: '/register', 
				data: $scope.user,
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; text/html; charset=UTF-8'
				}
			});
		}
	};

	$scope.submitLogin = function() {
		if (!$scope.loginform.$invalid) {
			$scope.user.username = $scope.user.email;
			console.log($scope.user);
			$http({
				url: '/login', 
				data: $scope.user,
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; text/html; charset=UTF-8'
				}
			});
		}
	};

});
