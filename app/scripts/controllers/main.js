var app = angular.module('portfolioApp', ["firebase"]);

app.factory('Items', function($firebase) {
	var itemsService = {};
  var REF = new Firebase("https://burning-fire-6770.firebaseio.com/");

	itemsService.getAll = function() {
     return $firebase(REF)
  }

  return itemsService;
});

app.controller('MainCtrl', function ($scope, Items) {
    $scope.item = {}

    $scope.items = Items.getAll()

    $scope.addItem = function(e) {
      if (e.keyCode != 13) return;
      $scope.items.$add({title: $scope.title, desc: $scope.desc});
      $scope.desc = "";
    };

  });
