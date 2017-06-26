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
    'firebase'
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
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .when('/encuestas', {
        templateUrl: 'views/encuestas.html',
        controller: 'EncuestasCtrl',
        controllerAs: 'encuestas'
      })
      .when('/add_usuarios', {
        templateUrl: 'views/add_usuarios.html',
        controller: 'AddUsuariosCtrl',
        controllerAs: 'addUsuarios'
      })
      .when('/edit_usuarios/:id', {
        templateUrl: 'views/edit_usuarios.html',
        controller: 'EditUsuariosCtrl',
        controllerAs: 'editUsuarios'
      })
      .when('/organizaciones', {
        templateUrl: 'views/organizaciones.html',
        controller: 'OrganizacionesCtrl',
        controllerAs: 'organizaciones'
      })
      .when('/add_organizaciones', {
        templateUrl: 'views/add_organizaciones.html',
        controller: 'AddOrganizacionesCtrl',
        controllerAs: 'addOrganizaciones'
      })
      .when('/edit_organizaciones/:id', {
        templateUrl: 'views/edit_organizaciones.html',
        controller: 'EditOrganizacionesCtrl',
        controllerAs: 'editOrganizaciones'
      })
      .when('/edit_encuestas/:id', {
        templateUrl: 'views/edit_encuestas.html',
        controller: 'EditEncuestasCtrl',
        controllerAs: 'editEncuestas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.config(function() {
  var config = 
        {
    apiKey: "AIzaSyAunMU1gJPm6Z4RZSKJP_dgsQwlS2GiSS8",               // Your Firebase API key
    authDomain: "izisurvey-df4d1.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
    databaseURL: "https://izisurvey-df4d1.firebaseio.com",     // Your Firebase Database URL ("https://*.firebaseio.com")
    storageBucket: "izisurvey-df4d1.appspot.com"  // Your Cloud Storage for Firebase bucket ("*.appspot.com")
  };


  firebase.initializeApp(config);
});

  app.factory("Auth",  function($firebaseAuth) {
    return $firebaseAuth();
  }
);



app.constant('FBURL','https://izisurvey-df4d1.firebaseio.com/');

  app.run(function($rootScope, $firebaseAuth){




$rootScope.user = {

'login':false

}

user = $rootScope.user ;


$rootScope.organizaciones = function(){

  try {
      return $rootScope.user.organizations.map(function (data){ return data.nombre} ).join(', ') 
}
catch(err) {

  return ''
}
}




   //  var config = {
   //  apiKey: "AIzaSyAunMU1gJPm6Z4RZSKJP_dgsQwlS2GiSS8",
   //  authDomain: "izisurvey-df4d1.firebaseapp.com",
   //  databaseURL: "https://izisurvey-df4d1.firebaseio.com",
   //  projectId: "izisurvey-df4d1",
   //  storageBucket: "izisurvey-df4d1.appspot.com",
   //  messagingSenderId: "317755149201"
   //  };
   // surveyapp = firebase.initializeApp(config);
      
    //console.log(surveyapp);
    /*
    surveyapp.database().ref('/users/').once('value').then(function(snapshot) {
      $rootScope.users = snapshot.val();
      $rootScope.$apply();
      console.log(snapshot.val());
    });
  */
  });
