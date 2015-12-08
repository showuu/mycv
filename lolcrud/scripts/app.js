'use strict';

var lolApp = angular.module('lolApp', [
	'ngRoute',
	'lolControllers',
	'lolServices',
	'lolAnimations'
]);

lolApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/heroes', {
			templateUrl: 'hero-list.html',
			controller: 'HeroListCtrl'
		}).
		when('/heroes/:heroId', {
			templateUrl: 'hero-detail.html',
			controller: 'HeroDetailCtrl'
		}).
		otherwise({
			redirectTo: '/heroes'
		});
	}]);