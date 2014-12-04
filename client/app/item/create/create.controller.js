'use strict';

angular.module('lostAndFoundApp')
  .controller('CreateCtrl', function ($scope, $http, $location) {
    $scope.categories = [];
    $scope.item = {};

    $http.get('/api/categories').success(function(categories) {
      $scope.categories = categories;
    });

  	var index = 0;
		$scope.items = ['step1', 'step2'];
	  $scope.selection = $scope.items[index];

    /**
     * A function to go forward one step.
     */
	  $scope.forward = function() {
      $scope.selection = $scope.items[++index];
    };

    /**
     * A funtion to go backward one step.
     * @return {[type]} [description]
     */
    $scope.back = function() {
      $scope.selection = $scope.items[--index];
    };  
    
    $scope.map = {
      control: {},
      center: {
        latitude: 40.74349,
        longitude: -73.990822
      },
      zoom: 12,
      dragging: false,
      bounds: {},
      markers: [],
      idkey: 'place_id'
    };

    /**
     * This function is called when a user presses 'enter' in the search bar.
     * IMPORTANT: This function needs be defined before we define our searchbox.
     * @param {SearchBox} SearchBox A Google Maps SearchBox item
     */
    var userHasSearched = function(searchBox) {
      // Get the places the Map API has found
      var places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }

      // Variables to store application data
      var newMarkers = [];
      var bounds = new google.maps.LatLngBounds();
      
      // For each place, get the icon, place name, and location.
      for (var i=0, place; place=places[i]; i++) {
        // Create a marker for each place.
        var marker = {
          id:i,
          place_id: place.place_id,
          name: place.name,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          options: {
            visible: true
          }
        };

        newMarkers.push(marker);
        bounds.extend(place.geometry.location);
      }

      // Set the map bounds so that it shows all the markers.
      $scope.map.bounds = {
        northeast: {
          latitude: bounds.getNorthEast().lat() + 0.005,
          longitude: bounds.getNorthEast().lng() + 0.005
        },
        southwest: {
          latitude: bounds.getSouthWest().lat() - 0.005,
          longitude: bounds.getSouthWest().lng() - 0.005
        }
      }
      
      // Display the selected address to the user
      if (places.length === 1) {
        $scope.address = places[0].formatted_address;
        $scope.name = places[0].name;
        $scope.latitude = places[0].geometry.location.lat();
        $scope.longitude = places[0].geometry.location.lng();
      }

      // Add the markers to the map
      $scope.map.markers = newMarkers;
    }

    $scope.searchbox = { 
      template:'searchbox.tpl.html',
      position:'top-left',
      events: {
        places_changed: userHasSearched
      }
    };

    
    $scope.submit = function() {
      var item = {
        title: $scope.item.title,
        description: $scope.item.description,
        category: $scope.item.category,
        location: {
          address: $scope.address,
          name: $scope.name,
          latitude: $scope.latitude,
          longitude: $scope.longitude
        }
      };

      $http.post('/api/items', item)
        .success(function(item) {
          $location.path('/view/' + item._id);
      });
    };

  });



