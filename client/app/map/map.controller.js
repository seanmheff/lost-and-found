'use strict';

angular.module('lostAndFoundApp')
  .controller('MapCtrl', function ($scope) {
    // do stuff with your $scope
    // it should be NOTED that some of the directives at least require something to be defined originally
    // ie:
    $scope.markers = [
    	{latitude: 46, longitude: -74},
    	{latitude: 47, longitude: -75},
    	{latitude: 48, longitude: -78}
    ];

      $scope.map = {
		    center: {
		      latitude: 45,
		      longitude: -73
		    },
		    zoom: 8
			};
      
  });