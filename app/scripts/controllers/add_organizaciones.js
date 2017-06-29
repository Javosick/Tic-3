'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:AddOrganizacionesCtrl
 * @description
 * # AddOrganizacionesCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('AddOrganizacionesCtrl', function ($routeParams,$firebaseObject ,$scope,$firebaseArray,$location) {


$scope.db_categorias = [];
ref = firebase.database().ref('category');
$scope.db_categorias = $firebaseArray(ref);


$scope.encuestas = []
$scope.db_usuarios = [];
ref = firebase.database().ref('users');
$scope.db_usuarios = $firebaseArray(ref);



 $scope.submit = function() {

var ref = firebase.database().ref('organizations');



var db_organizaciones = $firebaseArray(ref);


	var new_user = {
		'name' : $scope.new.name,
		'category' : $scope.new.category,
		'description' :  $scope.new.description ,
		'responsables':  $scope.new.responsables,
		'createdAt' : (+ new Date()).toString(),
		'users' :   $scope.new.users 
	}  

db_organizaciones.$add(new_user)


	$location.path('/organizaciones')


 };


  });
