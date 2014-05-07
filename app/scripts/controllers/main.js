var app = angular.module('portfolioControllers', ["firebase"]);

app.factory('ItemService', function($firebase) {
  var REF = new Firebase("https://burning-fire-6770.firebaseio.com/");
  return $firebase(REF);
});

app.controller('MainCtrl', ['$scope',
  function ($scope) {

  }
]);

app.controller('AboutCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {

  }
]);

app.controller('ContactCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {

  }
]);

app.controller('PortfolioCtrl', ['$scope', '$routeParams', 'ItemService',
  function($scope, $routeParams, itemService) {
    // Initialize item object
    $scope.item = {};

    // hide the input form by default
    $scope.inputFormVisible = false;

    // Define portfolio items
    $scope.items = itemService;
    $scope.addItem = function() {
      $scope.items.$add({title: $scope.item.title, desc: $scope.item.desc});
      $scope.inputFormVisible = false;
      $scope.item = {};
    };
  }
]);
/*
app.filter('inArray', function() {
  return function inArray( haystack, needle) {
    var result = []
  }
});
*/