'use strict';

/**
 * @ngdoc overview
 * @name surveyDevApp
 * @description
 * # surveyDevApp
 *
 * Main module of the application.
 */
 var surveyapp
var app = angular.module('surveyDevApp', [
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
      .when('/register',{
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/survey',{
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl',
        controllerAs: 'survey'
      })
      .when('/formulario', {
        templateUrl: 'views/formulario.html',
        controller: 'FormularioCtrl',
        controllerAs: 'formulario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  app.run(function($rootScope){

$rootScope.check = false;
$rootScope.check_login = function(){
return !$rootScope.check
}

    var config = {
    apiKey: "AIzaSyAunMU1gJPm6Z4RZSKJP_dgsQwlS2GiSS8",
    authDomain: "izisurvey-df4d1.firebaseapp.com",
    databaseURL: "https://izisurvey-df4d1.firebaseio.com",
    projectId: "izisurvey-df4d1",
    storageBucket: "izisurvey-df4d1.appspot.com",
    messagingSenderId: "317755149201"
    };
   surveyapp = firebase.initializeApp(config);
      
    //console.log(surveyapp);
    /*
    surveyapp.database().ref('/users/').once('value').then(function(snapshot) {
      $rootScope.users = snapshot.val();
      $rootScope.$apply();
      console.log(snapshot.val());
    });
  */
  });
