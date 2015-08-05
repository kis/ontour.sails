angular.module('ontour', []).
config(function($rootScope, $compileProvider, $httpProvider, $logProvider, $controllerProvider) {

	console.log('1');

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

	// Enable log
	$logProvider.debugEnabled(true);

	// set default headers
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.transformRequest = requestTransformer;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	function requestTransformer(data) {
	  return angular.isObject(data) && String(data) !== '[object File]' ? transformRequest(data) : data;
	}

	function transformRequest(object, prefix) {
	  var stack = [];
	  var value;
	  var key;
	  for (key in object) {
	    value = object[key];
	    key = prefix ? prefix + '[' + key + ']' : key;
	    if (value === null) {
	      value = encodeURIComponent(key) + '=';
	    } else if (typeof(value) !== 'object') {
	      value = encodeURIComponent(key) + '=' + encodeURIComponent(value);
	    } else {
	      value = transformRequest(value, key);
	    }
	    stack.push(value);
	  }
	  return stack.join('&');
	}

}).
run(function() {
	console.log('2');
});