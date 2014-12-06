'use strict';

angular.module('lostAndFoundApp')
  .service('Location', function () {
  	var location = null;

  	return {

      /**
       * Get the users location
       * 
       * @param  {Function} callback [description]
       * @return {[type]}            [description]
       */
  		getLocation: function(callback) {
        if (location) {
          callback(null, location);
        } else {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
              callback(null, location);
            }, function(err) {
              callback(err);
            });
          } else {
            callback('/* geolocation IS NOT available */');
          }          
        }
  		}
      
  	};

  });
