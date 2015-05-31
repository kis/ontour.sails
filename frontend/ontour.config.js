angular.module('ontour', []).
config(function($rootScope, $compileProvider, $httpProvider, $logProvider, $controllerProvider) {

	// $logProvider.debugEnabled(true);

	$controllerProvider.allowGlobals();

	$compileProvider.debugInfoEnabled(false);

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