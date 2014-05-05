var app = angular.module('portfolioApp')

app.factory('Test', function() {
	var service = {};

	service.test = function() {
            return "Testi!"
    }

    return service;
});

app.controller('MainCtrl', function ($scope, Test) {
	

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      Test.test()
    ];
  });
