'use strict';

angular.module('lostAndFoundApp')
  .controller('MapCtrl', function ($scope) {

    $scope.map = {
	    center: {
        latitude: 40.74349,
        longitude: -73.990822
	    },
	    zoom: 12
		};
      
  });