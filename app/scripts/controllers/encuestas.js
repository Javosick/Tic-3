'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:EncuestasCtrl
 * @description
 * # EncuestasCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('EncuestasCtrl', function ($scope,$firebaseArray) {
$scope.db_encuestas = [];
ref = firebase.database().ref('surveys');
$scope.db_encuestas = $firebaseArray(ref);


$scope.count = function(obj){

try{
	return Object.keys(obj).length
}
catch(err) {

return ""
}
}



  });
