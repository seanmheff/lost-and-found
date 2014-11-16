'use strict';

angular.module('lostAndFoundApp')
  .controller('SidebarCtrl', function ($scope, $location, Auth) {
    
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.openMapView = function() {
    	$location.path('/map');
    };

    $scope.openListView = function() {
    	$location.path('/list');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });