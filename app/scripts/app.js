'use strict';

/**
 * @ngdoc overview
 * @name surveyDevApp
 * @description
 * # surveyDevApp
 *
 * Main module of the application.
 */
var app = angular
  .module('surveyDevApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  app.run(function($rootScope){
    var config = {
    apiKey: "AIzaSyAunMU1gJPm6Z4RZSKJP_dgsQwlS2GiSS8",
    authDomain: "izisurvey-df4d1.firebaseapp.com",
    databaseURL: "https://izisurvey-df4d1.firebaseio.com",
    projectId: "izisurvey-df4d1",
    storageBucket: "izisurvey-df4d1.appspot.com",
    messagingSenderId: "317755149201"
    };
    /*
    var surveyapp = firebase.initializeApp(config);
    surveyapp.database().ref('/users/').once('value').then(function(snapshot) {
      $rootScope.users = snapshot.val();
      $rootScope.$apply();
      console.log(snapshot.val());
    });
  */
    /*
    firebase.database().ref('/users/' + ).once('value').then(function(snapshot) {
      $rootScope.casa = snapshot.val();
      $rootScope.$apply();
      console.log(snapshot.val());
    });*/
  });
