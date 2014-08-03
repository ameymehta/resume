(function(){
	var amapp = angular.module('mysite', ['ngRoute', 'ngdirectives']);

	amapp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when("/twitter", {templateUrl: 'partials/twitter-feed.html'})
			.when("/instagram", {templateUrl: 'partials/instagram-feed.html'})
			.when("/resume", {templateUrl: 'partials/resume.html'})
			.when("/about", {templateUrl: 'partials/resume.html'})
			.when("/", {templateUrl: 'partials/home.html'})
			.otherwise({redirectTo: "/"});

			$locationProvider.html5Mode(true);
	}]);

	amapp.controller('resumeController', ['$http',
		function($http) {
			var n = name;
			var res = this;
			res.resume = [];
			$http.get('json/resume.json').success(function(data){
				res.resume = data;
			});
		}
	]);

})();