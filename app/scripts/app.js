'use strict';

/**
 * @ngdoc overview
 * @name digitalisApp
 * @description
 * # digitalisApp
 *
 * Main module of the application.
 */
angular
  .module('digitalisApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Dashboard.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/nosTaches', {
        templateUrl: 'views/nosTaches.html',
        controller: 'NosTaches',
        controllerAs: 'taches'
      })
      .when('/acceuil', {
        templateUrl: 'views/Acceuil.html',
        controller: 'AcceuilCtrl',
        controllerAs: 'acceuil'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
