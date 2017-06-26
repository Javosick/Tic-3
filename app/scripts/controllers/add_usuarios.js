'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:AddUsuariosCtrl
 * @description
 * # AddUsuariosCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('AddUsuariosCtrl', function ($scope,Auth,$firebaseArray,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.new ={};





 $scope.submit = function() {

console.log(  $scope.new )

 Auth.$createUserWithEmailAndPassword($scope.new.email, $scope.new.passwd).then(function(firebaseUser) {
 	console.log("aca");
			uid = firebaseUser.uid;
			ref = firebase.database().ref('users');
			var new_user = {
				'email' : $scope.new.email,
				'lastName' : $scope.new.lastName,
				'name' :  $scope.new.name ,
				'rol':  $scope.new.rol,
				'createdAt' : (+ new Date()).toString(),
				'userName' :   $scope.new.userName 
			}  
			ref.child(uid).set(new_user);
			console.log( new_user ,"holax")

			$location.path('/usuarios')


        }).catch(function(error) {
          $scope.error = error;
        });



 };


  });
