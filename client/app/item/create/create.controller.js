'use strict';

angular.module('lostAndFoundApp')
  .controller('CreateCtrl', function ($scope, $http) {
    $scope.categories = [];

    $http.get('/api/categories').success(function(categories) {
      $scope.categories = categories;
    });


  });
