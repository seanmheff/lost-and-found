'use strict';

angular.module('lostAndFoundApp')
  .controller('ListCtrl', function ($scope, $http, socket, category) {
    $scope.items = [];

    $http.get('/api/items').success(function(items) {
      $scope.items = items;
      socket.syncUpdates('item', $scope.items);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('item');
    });

    /**
     * A function that gets an items icon CSS class.
     * @param {string} itemType - The item type.
     * @return {string}
     */
    $scope.getIconClass = function(itemType) {
      return category.getIconClass(itemType);
    };
  });
