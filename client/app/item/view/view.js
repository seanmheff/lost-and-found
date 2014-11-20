'use strict';

angular.module('lostAndFoundApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view/:id', {
        templateUrl: 'app/item/view/view.html',
        controller: 'ViewCtrl'
      });
  });
