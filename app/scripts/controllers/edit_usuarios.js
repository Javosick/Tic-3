'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:EditUsuariosCtrl
 * @description
 * # EditUsuariosCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp').controller('EditUsuariosCtrl', function ($routeParams,$firebaseObject ,$scope,$firebaseArray) {


$scope.db_organizations = [];
ref = firebase.database().ref('organizations');
$scope.db_organizations = $firebaseArray(ref);


  	console.log($routeParams.id )

var ref = firebase.database().ref('users/'+$routeParams.id ); 
obj = $firebaseObject(ref);
obj.$bindTo($scope, "edit")

  });
