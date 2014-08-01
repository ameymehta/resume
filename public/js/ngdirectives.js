(function() {
	var amapp = angular.module('ngdirectives', []);

	amapp.directive('resume', function(){
		return {
			restrict: 'E',
			templateUrl: "partials/resume.html"
		};
	});

	amapp.directive('navBar', function(){
		return {
			restrict: 'E',
			templateUrl: "partials/nav-bar.html"
		};
	});
})();