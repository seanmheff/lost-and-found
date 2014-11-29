'use strict';

angular.module('lostAndFoundApp')
  .controller('ViewCtrl', function ($scope, $http, $routeParams) {
	    var id = $routeParams.id;

	    $http.get('/api/items/' + id).success(function(item) {
	      $scope.item = item;
	    });

	  });
