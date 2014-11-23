'use strict';

angular.module('lostAndFoundApp')
  .controller('CategoryCtrl', function ($scope, $http, socket, category) {
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

    $scope.delete = function(category) {
      $http.delete('/api/categories/' + category._id);
    };

    /**
     * A function that gets an items icon CSS class.
     * @param {string} itemType - The item type.
     * @return {string}
     */
    $scope.getIconClass = function(itemType) {
      return category.getIconClass(itemType);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('category');
    });
  });
