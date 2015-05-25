angular.module('ontour', []).
config(function($compileProvider, $httpProvider, $logProvider, $controllerProvider) {

	// $logProvider.debugEnabled(true);

	$controllerProvider.allowGlobals();

	$compileProvider.debugInfoEnabled(false);

	// $httpProvider.useApplyAsync(true);

	console.log('111');

}).
run(function() { 

	console.log('111');

});