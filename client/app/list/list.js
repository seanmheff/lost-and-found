'use strict';

angular.module('lostAndFoundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      });
  });
