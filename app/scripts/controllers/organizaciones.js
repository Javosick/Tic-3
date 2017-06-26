'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:OrganizacionesCtrl
 * @description
 * # OrganizacionesCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('OrganizacionesCtrl', function ($scope,$firebaseArray) {
$scope.db_organizaciones = [];
ref = firebase.database().ref('organizations');
$scope.db_organizaciones = $firebaseArray(ref);


$scope.count = function(obj){

	return Object.keys(obj).length
}

  });
