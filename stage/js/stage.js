(function(){
	var stage = angular.module('stagesite', ['ngRoute', 'ngdirectives']);

	stage.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when("/twitter", {templateUrl: 'partials/twitter-feed.html'})
			.when("/instagram", {templateUrl: 'partials/instagram-feed.html'})
			.when("/", {templateUrl: 'partials/resume.html'})
			.otherwise({redirectTo: "/"});

			$locationProvider.html5Mode(true);
	}]);

	stage.controller('resumeController', ['$http',
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