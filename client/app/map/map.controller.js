'use strict';

angular.module('lostAndFoundApp')
  .controller('MapCtrl', ['$scope', 'GoogleMapApi'.ns(), function ($scope, GoogleMapApi) {
    // do stuff with your $scope
    // it should be NOTED that some of the directives at least require something to be defined originally
    // ie:
    $scope.markers = [
    	{latitude: 46, longitude: -74},
    	{latitude: 47, longitude: -75},
    	{latitude: 48, longitude: -78}
    ];


    /*
    * GoogleMapApi is a promise with a
    * then callback of the google.maps object
    *   @pram: maps = google.maps
    */
    GoogleMapApi.then(function(maps) {
      $scope.map = {
		    center: {
		      latitude: 45,
		      longitude: -73
		    },
		    zoom: 8
			};
    });
  
  }]);