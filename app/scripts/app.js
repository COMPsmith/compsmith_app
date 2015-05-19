'use strict';

/**
 * @ngdoc overview
 * @name htmlApp
 * @description
 * # htmlApp
 *
 * Main module of the application.
 */
angular
  .module('htmlApp', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'servicesCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'productsCtrl'
      })
      .when('/support', {
        templateUrl: 'views/support.html',
        controller: 'supportCtrl'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'contact-usCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  (function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space