'use strict';

angular.module('lostAndFoundApp')
  .controller('ViewCtrl',  ['$scope', '$http', '$routeParams', 'GoogleMapApi'.ns(), 
  	function ($scope, $http, $routeParams, GoogleMapApi) {
	    var id = $routeParams.id;

	    /*
	    * GoogleMapApi is a promise with a
	    * then callback of the google.maps object
	    *   @pram: maps = google.maps
	    */
	    GoogleMapApi.then(function(maps) {
		    $http.get('/api/items/' + id).success(function(item) {
		      $scope.item = item;
		    });
	    });

	  }]);
