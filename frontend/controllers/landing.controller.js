angular.module('ontour').controller('LandingController', ['$scope', '$http', 'md5',
	function ($scope, $http, md5) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		if (!$scope.regform.$invalid) {
			var userData = angular.copy($scope.user);
			userData.password = md5.createHash(userData.password);
			console.log(userData);
			$http({
				url: '/auth/local/register', 
				data: userData,
				method: 'POST'
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
				method: 'GET'
			});
		}
	};

}]);
