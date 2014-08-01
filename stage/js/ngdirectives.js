(function() {
	var amapp = angular.module('ngdirectives', []);

	amapp.directive('resume', function(){
		return {
			restrict: 'E',
			templateUrl: "partials/resume.html"
		};
	});

})();