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
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/2', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/3', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      }
    );
  }
]);
