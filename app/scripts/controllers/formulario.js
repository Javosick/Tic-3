'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the surveyDevApp
 */
angular.module('surveyDevApp')
  .controller('FormularioCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.preguntas =[

{tipo:null,alternativas:[{}]}

    ]

    $scope.seleccionar_tipo = function(pregunta,tipo){

    }

    $scope.agregar = function(){
$scope.preguntas.push({tipo:null,alternativas:[{}]});

    }

        $scope.quitar = function(){
$scope.preguntas.pop();

    }


function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


$scope.guardar = function(){
console.log($scope.preguntas);

firebase.database().ref( makeid()).$set($scope.preguntas);


    }
  });
