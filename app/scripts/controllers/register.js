'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the surveyDevApp
 */
var app = angular.module('surveyDevApp');

app.controller('RegisterCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('RegisterCtrl', function(event) {
event.preventDefault();  // To prevent form refresh
    
});
