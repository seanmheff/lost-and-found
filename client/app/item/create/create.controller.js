'use strict';

angular.module('lostAndFoundApp')
  .controller('CreateCtrl', function ($scope, $http) {
    $scope.categories = [];

    $http.get('/api/categories').success(function(categories) {
      $scope.categories = categories;
    });

  	var index = 0;
		$scope.items = ['settings', 'home', 'other'];
		$scope.stages = ['1', 'home', 'other'];
	  $scope.selection = $scope.items[0];

	  $scope.forward = function() {
	  	$scope.selection = $scope.items[++index];
	  };

	  $scope.back = function() {
	  	$scope.selection = $scope.items[--index];
	  };

    $scope.map = {
	    center: {
	      latitude: 45,
	      longitude: -73
	    },
	    zoom: 8
		};

  });



