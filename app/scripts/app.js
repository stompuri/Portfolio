'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'portfolioControllers'
]);
/*
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
*/

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider
    .when('/views/:1', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/views/:3', {
      templateUrl: 'views/portfolio.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/views/:1'
    });
  }
]);
