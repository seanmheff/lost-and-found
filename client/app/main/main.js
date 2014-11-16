'use strict';

angular.module('lostAndFoundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/map/map.html',
        controller: 'MapCtrl'
      });
  });