angular.module('ontour', []).
config(function($rootScope, $compileProvider, $httpProvider, $logProvider, $controllerProvider) {

	// $logProvider.debugEnabled(true);

	$controllerProvider.allowGlobals();

	$compileProvider.debugInfoEnabled(false);

	// delete $httpProvider.defaults.headers.common['X-Requested-With'];
	// $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
	$httpProvider.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded; text/html; charset=UTF-8";
	// $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
	// $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
	// $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
	$httpProvider.defaults.headers.common['Content-Type'] = "application/x-www-form-urlencoded; text/html; charset=UTF-8";
	// $httpProvider.defaults.useXDomain = true;

	// $httpProvider.useApplyAsync(true);
	
	/*
	$rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams) {
		if (e typeof AuthorizationError) {
			$state.go('login');
		}	
	});
	*/

}).
run(function() {

});