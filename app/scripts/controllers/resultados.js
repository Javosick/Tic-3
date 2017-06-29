'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:ResultadosCtrl
 * @description
 * # ResultadosCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('ResultadosCtrl' , function ($routeParams,$firebaseObject ,$scope,$firebaseArray) {


$scope.db_resultados = [];
ref = firebase.database().ref('surveyAnswers');
obj = $scope.db_resultados = $firebaseArray(ref);

 $scope.resultados = {} 
  resultados =  $scope.resultados
$scope.db_encuesta = {};
ref = firebase.database().ref('surveys/'+$routeParams.id );
$scope.encuesta = $scope.db_resultados = $firebaseObject(ref);



$scope.getArray = function(){


	var arreglo = [];
	var encuesta = $scope.encuesta;

	for (var ixx= 0 ; ixx < encuesta.questionSections.length; ixx++){
		arreglo.push({a: "Seccion " + (ixx+1), b:encuesta.questionSections[ixx].description} ) 
	for (var jxx= 0 ; jxx < encuesta.questionSections[ixx].questions.length; jxx++){
		arreglo.push({a: "Pregunta " + (jxx+1), b:encuesta.questionSections[ixx].questions[jxx].description} ) 


var question = encuesta.questionSections[ixx].questions[jxx];

console.log("aca voy",question)
if(question.type != 2 ){
	for (var kxx= 0 ; kxx < question.options.length; kxx++){


		

			console.log("aquii")
		arreglo.push({a: "Opcion " + (kxx+1), b:question.options[kxx].option ,

			c:$scope.contar(ixx,jxx,question.options[kxx].option)
	} ) 
	}



	}
}


	}



	return arreglo
}


$scope.get_resultados = function(i,j){

console.log("aqui",i,j)
	return resultados[i][j]
}

$scope.contar = function(i,j,opcion){


try {

var a = resultados[i][j]



var aCount = new Map([...new Set(a)].map(
    x => [x, a.filter(y => y === x).length]
));


var num = aCount.get(opcion)*100/a.length
num = Math.round(num * 100) / 100

if ( num+" "=="NaN ")
	return "0 %"

return num + " %"

}
catch(err){
	return "0 %"
}

}




obj.$loaded().then(function(data){

console.log("aca",data)
var dato,ixx,jxx,kxx,resultado,r,sub;

for(ixx = 0; ixx < data.length;ixx++){
	dato= data[ixx]

	console.log(dato);

	if (dato[$routeParams.id] != undefined ){

		resultado = dato[$routeParams.id]

		console.log(resultado);
		for (jxx=0;jxx<resultado.length;jxx++){

			r = resultado[jxx]
		console.log(r);

		if (resultados[jxx] == undefined){
			resultados[jxx]={}
		}

		x= r;
		for (kxx = 0 ; kxx < r.length; kxx++){

			sub = r[kxx];

			if (resultados[jxx][kxx]== undefined ){
				resultados[jxx][kxx] =[]

			}


				if (sub.type !=2 ){

					resultados[jxx][kxx]= sub.answer
				}
				else if (sub.type == 2 ){

					resultados[jxx][kxx].push( sub.answer.text)
				} 


			console.log(sub);


		}
	}

	}


}


});






  });
