'use strict';

angular.module('lostAndFoundApp')
  .service('category', function () {
    var itemIconClasses = {
		  'Electronics': 'glyphicon glyphicon-phone',
		  'misc': 'glyphicon glyphicon-star-empty',
		  'personal': 'glyphicon glyphicon-briefcase',
		};

		return {
			/**
	     * A function that gets an items icon CSS class.
	     * @param {string} itemType - The item type.
	     * @return {string}
	     */
	    getIconClass: function(itemType) {
	      return itemIconClasses[itemType] || 'glyphicon glyphicon-pushpin';
	    }
		}
  });
