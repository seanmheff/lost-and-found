'use strict';

angular.module('lostAndFoundApp')
  .controller('CategoryCtrl', function ($scope, $http, socket) {
    $scope.categories = [];

    $http.get('/api/categories').success(function(categories) {
      $scope.categories = categories;
      socket.syncUpdates('category', $scope.categories);
    });

    $scope.addCategory = function() {
      if($scope.newCategory === '') {
        return;
      }
      $http.post('/api/categories', { name: $scope.newCategory });
      $scope.newCategory = '';
    };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('category');
    });
  });
