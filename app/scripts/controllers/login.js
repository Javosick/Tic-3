'use strict';

/**
 * @ngdoc function
 * @name surveyDevApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the surveyDevApp
 */
var app = angular.module('surveyDevApp');
//Para obtener email de formulario
app.factory('mail', function(){
    var emailObj = {};
    return {
        setMail: function(data) {
            emailObj.email = data.email;
        },
        getMail: function() {
            return emailObj.email;
        }
    };
});
//para obtener contraseña de formulario
app.factory('pass', function(){
    var passObj = {};
    return {
        setPass: function(data) {
            passObj.password= data.password;
        },
        getPass: function() {
            return passObj.password;
        }
    };
});

app.controller('LoginCtrl', function ($scope, mail, pass) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
	$scope.submitForm = function(mail1,pass1) {
        mail.setMail(mail1);
        pass.setPass(pass1);
       console.log(mail1);
       console.log(pass1);
       console.log(mail.getMail());
       console.log(pass.getPass());
 firebase.auth().signInWithEmailAndPassword(mail1, pass1)
	    .catch(function(error) {
	  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  if (errorCode === 'auth/wrong-password') {
		    alert('Wrong password.');
		  } else {
		    alert(errorMessage);
		  }
		  console.log(error);
		});
	};
});