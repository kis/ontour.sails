angular.module('ontour', []).
config(function($compileProvider, $logProvider) {

	$logProvider.debugEnabled(true);

	$compileProvider.debugInfoEnabled(false);

}).
run(function() {
 
});