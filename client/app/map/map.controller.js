'use strict';

angular.module('lostAndFoundApp')
  .controller('MapCtrl', function ($scope, $http, uiGmapGoogleMapApi, Location, $rootScope) {

    $scope.mapLoaded = false;
    $scope.map = {
      center: {
        latitude: 40.74349,
        longitude: -73.990822
      },
      zoom: 12,
      dragging: false,
      bounds: {}
    };

    uiGmapGoogleMapApi.then(function(maps) {
      // // Get all the items
      // $http.get('/api/items/').success(function(items) {
      //   var markers = [];
      //   var bounds = new google.maps.LatLngBounds();

      //   // For each item, create a marker, and extend the maps bounds
      //   angular.forEach(items, function(item) {
      //     bounds.extend(new google.maps.LatLng(item.location.latitude, item.location.longitude));
      //     this.push(item.location);
      //   }, markers);

      //   // Set the map bounds
      //   $scope.map.bounds = {
      //     northeast: {
      //       latitude: bounds.getNorthEast().lat() + 0.005,
      //       longitude: bounds.getNorthEast().lng() + 0.005
      //     },
      //     southwest: {
      //       latitude: bounds.getSouthWest().lat() - 0.005,
      //       longitude: bounds.getSouthWest().lng() - 0.005
      //     }
      //   };

      //   // Set the map's markers
      //   $scope.map.markers = markers;
      // });
      // 
      
      Location.getLocation(function(err, location) {
        if (err) { 
          console.log(err); 
        } else {
          $scope.map.center = angular.copy(location);
          $scope.map.markers = [location];
          $scope.mapLoaded = true;
          $rootScope.$$phase || $rootScope.$apply();
        }
      });

    });



  });