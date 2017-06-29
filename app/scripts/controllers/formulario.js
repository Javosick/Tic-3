'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('FormularioCtrl', function ($routeParams,$rootScope,$firebaseObject ,$scope,$firebaseArray,$location) {


$scope.new ={

	"questionSections":[{
		"questions":[
		{
			"options":[{}]
			
		}	


		] 
	}	


	],
};  




$scope.db_organizations = [];
ref = firebase.database().ref('organizations');
$scope.db_organizations = $firebaseArray(ref);






$scope.add_preguntas = function(ix){

$scope.new.questionSections[ix].questions.push({
			"options":[{}]
			
		})

}


$scope.add_seccion = function(ix){

$scope.new.questionSections.push({
		"questions":[
		{
			"options":[{}]
			
		}	


		] 
	}	)

}



$scope.test = function(){


console.log($scope.new)

var d = new Date();
d.setMonth(d.getMonth() + 1);


$scope.new.createdAt = (+ new Date()).toString()
$scope.new.finishDate = (+ d).toString()
$scope.new.initDate = (+ new Date()).toString()
$scope.new
$scope.new.userCreator  = $rootScope.user.name+" "+$rootScope.user.lastName

var seccion,question;  

for (var ixx=0 ;ixx<  $scope.new.questionSections.length;ixx++){
seccion = $scope.new.questionSections[ixx];
seccion.order=ixx+1 

for (var jxx=0 ;jxx< seccion.questions.length;jxx++){

	question = seccion.questions[jxx]
	question.order=jxx+1



}	

}  



var ref2 = firebase.database().ref('organizations/'+$scope.new.organization); 

var  obj= $firebaseObject(ref2)


var ref = firebase.database().ref('surveys');
var surveys = $firebaseArray(ref);
surveys.$add($scope.new).then(function(ref) {




obj.$loaded().then(function(data) {




try{

data['surveys'][ref.key]=true
}
catch(err) {

data['surveys']={}
data['surveys'][ref.key]=true

	}


data.$save()

console.log(data);
	for(var ixx = 0 ; ixx< data.users.length;ixx++){

		var user = data.users[ixx];


var ref3 = firebase.database().ref('users/'+user); 

var  obj2= $firebaseObject(ref3)

obj2.$loaded().then(function(data2) {

try{

data2['surveys'][ref.key]=true
}
catch(err) {

data2['surveys']={}
data2['surveys'][ref.key]=true

	}

	data2.$save();




});





	}

$location.path('/encuestas')


});



});



}

  }  );

