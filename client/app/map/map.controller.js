'use strict';

angular.module('lostAndFoundApp')
  .controller('MapCtrl', function ($scope, $http, uiGmapGoogleMapApi) {
    // var bounds = new google.maps.LatLngBounds();
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
      $http.get('/api/items/').success(function(items) {
        var markers = [];
        var bounds = new google.maps.LatLngBounds();

        angular.forEach(items, function(item) {
          bounds.extend(new google.maps.LatLng(item.location.latitude, item.location.longitude));
          this.push(item.location);
        }, markers);

        $scope.map.bounds = {
          northeast: {
            latitude: bounds.getNorthEast().lat() + 0.005,
            longitude: bounds.getNorthEast().lng() + 0.005
          },
          southwest: {
            latitude: bounds.getSouthWest().lat() - 0.005,
            longitude: bounds.getSouthWest().lng() - 0.005
          }
        };

        $scope.map.markers = markers;
      });
    });



  });