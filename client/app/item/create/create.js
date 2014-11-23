'use strict';

angular.module('lostAndFoundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create', {
        templateUrl: 'app/item/create/create.html',
        controller: 'CreateCtrl'
      });
  });
