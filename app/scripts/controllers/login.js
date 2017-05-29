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

app.controller('LoginCtrl', function ($window,$location, $route, $scope, mail, pass) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.loggedIn = false;
    $scope.currentUser = null;
    $scope.contador = 1;
    $scope.setcurrentUser = function (user) {
      $scope.currentUser = user;  
    };
    $scope.getcurrentUser = function () {
        return $scope.currentUser;
    }
    $scope.getloggedIn = function () {
        return $scope.loggedIn;
    }
    $scope.setloggedIn = function (status) {
      $scope.loggedIn = status;  
    };
	$scope.submitForm = function(mail1,pass1) {
        mail.setMail(mail1);
        pass.setPass(pass1);
       /*console.log(mail1);
       console.log(pass1);
       console.log(mail.getMail());
       console.log(pass.getPass());*/
        $scope.promise = null;
        $scope.setPromise = function (data) {
            $scope.promise = data;
        }
        $scope.getPromise = function () {
            return $scope.promise;
        }
        $scope.setPromise( firebase.auth().signInWithEmailAndPassword(mail1, pass1)
	    .catch(function(error) {
	  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  if (errorCode === 'auth/wrong-password') {
		    alert('Wrong password.');
            return false;
		  } else {
		    alert(errorMessage);
            return false;
		  }
		  }));
		  console.log(error);
        if (error) {
            $scope.setloggedIn(true);
            $window.location.assign('#!/survey');
        } 
     
    }
    $scope.islogged = function () {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user && $scope.getloggedIn() == false && $scope.contador == 1 ) {
            $scope.setloggedIn(true);
            $scope.setcurrentUser(user.He.email);
            //console.log(user);
            alert('Welcome  ' + user.He.email );
            //$location.path('#!/login');
            //$route.reload();
            $scope.contador ++;
            console.log($scope.contador);
            return true;
            $window.location.reload();
        }
        else {
            alert('Log in to get access to the surveys!');
            $scope.setcurrentUser(null);
            $scope.setloggedIn(false);
            return false;
        }
        });
        /*if (logi) {
          // User is signed in.
            $scope.setloggedIn(true);
            $scope.setcurrentUser(user);
            alert('Bienbenido' + user );
            return true;
        } else {
          // No user is signed in.
            alert('Log in to get access to the surveys!');
            $scope.setcurrentUser(null);
            $scope.setloggedIn(false);
            return false;
        }
        */
    };
    $scope.logout = function () {
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
        alert('Thanks for use our services, See you soon!');
        $scope.contador = 1;
        $location.path('#!/');
        $route.reload();
    };
});