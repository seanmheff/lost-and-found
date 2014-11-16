'use strict';

var itemIconClasses = {
  'electronics': 'glyphicon glyphicon-phone',
  'misc': 'glyphicon glyphicon-star-empty',
  'personal': 'glyphicon glyphicon-briefcase',
};

angular.module('lostAndFoundApp')
  .controller('ListCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.items = [
      {
        heading: "Bag of weed found on Glann Road.",
        type: "misc",
        time: new Date()
      },
      {
        heading: "Wallet found in Eye Cinema",
        type: "personal",
        time: new Date()
      },
      {
        heading: "Nokia 3510i found at Tesco.",
        type: "electronics",
        time: new Date()
      },
    ];

    /**
     * A function that gets an items icon CSS class.
     * @param {string} itemType - The item type.
     * @return {string}
     */
    $scope.getIconClass = function(itemType) {
      return itemIconClasses[itemType];
    };
  });
