(function(){
	var amapp = angular.module('mysite', ['ngRoute', 'ngdirectives']);

	amapp.config(function($routeProvider) {
		$routeProvider
			.when("/twitter", {templateUrl: 'partials/twitter-feed.html'})
			.when("/hi", {templateUrl: 'partials/hi.html'})
			.when("/", {templateUrl: 'partials/resume.html'})
			.otherwise({redirectTo: "/"});
	});

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