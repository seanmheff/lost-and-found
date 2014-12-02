'use strict';

angular.module('lostAndFoundApp')
  .controller('ViewCtrl', function ($scope, $http, $routeParams) {
	    var id = $routeParams.id;

	    $http.get('/api/items/' + id).success(function(item) {
	      $scope.item = item;

	      // We have to copy the map center object so that the Marker is not bound the map center
	      // i.e. The marker does not stay in the middle of the map, when changing locations
	      $scope.map = {
	      	center: angular.copy(item.location)
	      };
	    });

	  });
