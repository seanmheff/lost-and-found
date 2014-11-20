'use strict';

angular.module('lostAndFoundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/category', {
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
