var app = angular.module('portfolioControllers', ["firebase"]);

app.factory('LoginService', function ($firebaseSimpleLogin) {
  var REF = new Firebase("https://burning-fire-6770.firebaseio.com/");
  return $firebaseSimpleLogin(REF);
});

app.factory('ItemService', function($firebase) {
  var REF = new Firebase("https://burning-fire-6770.firebaseio.com/");
  return $firebase(REF);
});

app.directive('stFlash', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      message:'='
    },
    templateUrl: 'views/flash.html',
    link: function(scope, elem, attrs) {
      if(attrs['type'] != undefinded) {
        elem.addClass('alert-'+attrs['type']);
      } else {
        elem.addClass('alert-success');
      }
    }
  };
});

app.controller('MainCtrl', ['$scope',
  function ($scope) {
    $scope.items = ['about', 'contact', 'portfolio'];
    $scope.selected = $scope.items[0];

    $scope.select = function(item) {
      $scope.selected = item;
    }
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

app.controller('PortfolioCtrl',
  ['$scope', '$routeParams', 'ItemService', 'LoginService',
  function($scope, $routeParams, itemService, loginService) {
    // Initialize item object
    $scope.item = {};

    // Get login object
    $scope.loginObj = loginService;

    // hide the input form by default
    $scope.inputFormVisible = false;

    // Define the portfolio items:
    // Get all items
    $scope.items = itemService;

    // Add new item
    $scope.addItem = function() {
      // Create & add the item defined by the input form
      $scope.items.$add({title: $scope.item.title, desc: $scope.item.desc});
      // Define the flash pop-up
      $scope.flash = "A new portfolio item '" + $scope.item.title + "' added!";
      // Clear & hide the input form
      $scope.inputFormVisible = false;
      $scope.item = {};
    };

    $scope.deleteItem = function(key) {
      $scope.items.$remove(key);
    };
  }
]);

app.controller('AuthCtrl', ['$scope', 'LoginService',
  function($scope, loginService) {
    // Get login object
    $scope.loginObj = loginService;

    // Initialize empty user object
    $scope.user = {};

    $scope.loginUser = function() {
      $scope.loginObj.$login('password', {
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function(user) {
        console.log('Logged in as: ', user.uid);
        // Empty fields
        $scope.user = {};
        // Define the flash pop-up
        $scope.flash = "Logged in as '" + user.uid + "!";
      }, function(error) {
        console.error('Login failed: ', error);
      });
    }

    $scope.addUser = function() {
      $scope.loginObj.$createUser($scope.user.email, $scope.user.password);
      console.log('Added user: ', $scope.user.email, ' & ', $scope.user.password);
    }
  }
]);