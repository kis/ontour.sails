'use strict';

define(['angular',
		'animate', 
		'./controllers/index', 
		'./services/index',
		], function(angular, animate) {

	return angular.module('App', [
		'ngAnimate',
		'ontour.controllers', 
		'ontour.services',
	]);

});