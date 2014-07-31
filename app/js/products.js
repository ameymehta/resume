(function() {
	var app = angular.module('store-products', []);

		//dash in HTML translates to ...camelCase in JavaScript
	app.directive('productTitle', function() {
		return {
			restrict: 'E', //type of directive, here A is for attribut and E would be for element
			templateUrl: 'partials/product-title.html'
		};
	});

	app.directive('productPanels', pp);

	function pp() {
		//debugger;
		return {
			restrict: 'E',
			templateUrl: 'partials/product-panels.html'
			// controller: function() {
			// 	this.tab = 1;

			// 	this.selectTab = function(setTab) {
			// 		this.tab = setTab;
			// 	};

			// 	this.isSelected = function(checkTab) {
			// 		return this.tab === checkTab;
			// 	};
			// },
			// controllerAs: 'panels'
		};
	}
	
})();