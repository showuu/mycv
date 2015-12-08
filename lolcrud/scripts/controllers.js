'use strict';

/* Controllers */

var lolControllers = angular.module('lolControllers', []);

lolControllers.controller('HeroListCtrl', ['$scope', 'Hero', 
  function($scope, Hero) {
    $scope.heroes = Hero.query();
    $scope.orderProp = 'age';
  }]);

lolControllers.controller('HeroDetailCtrl', ['$scope', '$routeParams', 'Hero', 
  function($scope, $routeParams, Hero) {
    	$scope.hero = Hero.get({heroId: $routeParams.heroId}, function(hero) {
        $scope.mainImageUrl = hero.images[0];
      });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);