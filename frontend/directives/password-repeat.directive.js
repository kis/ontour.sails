angular.module('ontour').directive('passwordRepeat', function() {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, ctrl) {
			scope.$watch(attrs.ngModel, function() {
				if (scope.regform.password.$viewValue != ctrl.$viewValue) {
					ctrl.$setValidity('passwordRepeat', false);
				} else {
					ctrl.$setValidity('passwordRepeat', true);
				}
			});
		}
	};
});