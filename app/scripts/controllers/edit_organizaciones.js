'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:EditOrganizacionesCtrl
 * @description
 * # EditOrganizacionesCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('EditOrganizacionesCtrl', function ($routeParams,$firebaseObject ,$scope,$firebaseArray) {


$scope.db_categorias = [];
ref = firebase.database().ref('category');
$scope.db_categorias = $firebaseArray(ref);


$scope.encuestas = []
$scope.db_usuarios = [];
ref = firebase.database().ref('users');
$scope.db_usuarios = $firebaseArray(ref);

var ref = firebase.database().ref('organizations/'+$routeParams.id ); 
obj = $firebaseObject(ref);
obj.$bindTo($scope, "edit").then(function() {

  
  	var keys = Object.keys(obj.surveys);
  	for (var ixx=0 ; ixx < keys.length ; ixx++ ){

  		var r = firebase.database().ref('surveys/'+keys[ixx]); 
			 var o = $firebaseObject(r).$loaded()
  .then(function(j) {

$scope.encuestas.push(j.name)

  });

  	}

   

});





  });
