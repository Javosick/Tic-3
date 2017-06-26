'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('UsuariosCtrl', function ($scope,$firebaseArray) {


$scope.users = [];
 

ref = firebase.database().ref('users');
$scope.users = $firebaseArray(ref);


  });
