angular.module('ontour').controller('LandingController', ['$scope', '$http', 'md5',
	function ($scope, $http, md5) {
	
	$scope.user = {};

	$scope.submitRegistration = function() {
		if (!$scope.regform.$invalid) {
			var userData = angular.copy($scope.user);
			// userData.password = md5.createHash(userData.password);
			$http({
				url: '/auth/local/register', 
				data: userData,
				method: 'POST'
			});
		}
	};

	$scope.submitLogin = function() {
		if (!$scope.loginform.$invalid) {
			var userData = angular.copy($scope.user);
			userData.password = md5.createHash(userData.password);
			$http({
				url: '/login', 
				data: userData,
				method: 'GET'
			});
		}
	};

}]);
