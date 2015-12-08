'use strict';

var lolServices = angular.module('lolServices', ['ngResource']);

lolServices.factory('Hero', ['$resource', 
	function($resource) {
		return $resource('heroes/:heroId.json', {}, {
			query: {method:'GET', params: {heroId: 'heroes'}, isArray:true}
		});
	}]);