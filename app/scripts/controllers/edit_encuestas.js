'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:EditEncuestasCtrl
 * @description
 * # EditEncuestasCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('EditEncuestasCtrl' , function ( $location ,$routeParams,$firebaseObject ,$scope,$firebaseArray) {

  	console.log($routeParams.id )

var ref = firebase.database().ref('surveys/'+$routeParams.id ); 
obj = $firebaseObject(ref);
$scope.edit = obj;


// obj.$bindTo($scope, "edit").then(function(){

// // var seccion,question;  

// // for (var ixx=0 ;ixx<  $scope.edit.questionSections.length;ixx++){
// // seccion = $scope.edit.questionSections[ixx];
// // seccion.order=ixx+1 

// // for (var jxx=0 ;jxx< seccion.questions.length;jxx++){

// // 	question = seccion.questions[jxx]
// // 	question.order=jxx+1



// // }	

// // }  



// });




$scope.db_organizations = [];
ref = firebase.database().ref('organizations');
$scope.db_organizations = $firebaseArray(ref);





$scope.add_opcion = function(opcion){

opcion.push({
			"option":""
			
		})

}



$scope.add_preguntas = function(ix){

$scope.edit.questionSections[ix].questions.push({
			"options":[{}],
			
			
		})

}


$scope.add_seccion = function(){

$scope.edit.questionSections.push({
		"questions":[
		{
			"options":[{}],
		
			
		},


		] ,
	}	)

}


$scope.test = function(){




var seccion,question;  

for (var ixx=0 ;ixx<  $scope.edit.questionSections.length;ixx++){
seccion = $scope.edit.questionSections[ixx];
seccion.order=ixx+1 

for (var jxx=0 ;jxx< seccion.questions.length;jxx++){

	question = seccion.questions[jxx]
	question.order=jxx+1



}	

} 

$scope.edit.$save();
$location.path('/encuestas') 




}






  });
