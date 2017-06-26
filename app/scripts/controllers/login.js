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

app.controller('LoginCtrl', function ( $scope,$rootScope, $firebaseAuth,FBURL,$firebaseObject,$firebaseArray) {

$scope.mail = {
    email:'',
    passwd: ''

}   

$scope.Cargando = false






if  ($firebaseAuth().$getAuth() == null){



$rootScope.user.login  = true

 
} 
else{


$rootScope.user.login  = false

}








x = obj



 $scope.submit = function() {
      
      $scope.Cargando = true

$firebaseAuth().$signInWithEmailAndPassword($scope.mail.mail,$scope.mail.passwd).then(function(firebaseUser) {
  console.log("Signed in as:", firebaseUser.uid);
  


 ref = firebase.database().ref('users/'+firebaseUser.uid);
var  obj_user = $firebaseObject(ref);

  user = $rootScope.user  = obj_user
 
  


  obj_user.$loaded(
  function(data) {
    
    console.log(obj.rol)

  },
  function(error) {
    console.error("Error:", error);
  }
);


ref = firebase.database().ref('organizations');
 var obj = $firebaseArray(ref);


  obj.$loaded(
  function(data) {

$rootScope.user.organizations=[]
var ob 
    for (var ixx = 0;ixx< obj.length;ixx++) {
        ob = obj[ixx]

         $.map(ob.users, function(value, index) {
                    if ( firebaseUser.uid == index){

                             $rootScope.user.organizations.push({'key':ob.$id,'nombre' :ob.name})
                    }
                      
                });
            }
            $rootScope.user.login  = false 
        $scope.Cargando = false

        }
);





}).catch(function(error) {
  console.error("Authentication failed:", error);
    $rootScope.user.login  = true 
    $scope.Cargando = false
});


        };




        // var ref = new Firebase(FBURL);
        // // create an instance of the authentication service
        // var auth = $firebaseAuth(ref);



        // x = auth












})


// app.controller('LoginCtrl', function ($window,$location, $route, $scope,$rootScope, mail, pass) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//     $scope.loggedIn = false;
//     $scope.currentUser = null;
//     $scope.contador = 1;
//     $scope.setcurrentUser = function (user) {
//       $scope.currentUser = user;  
//     };
//     $scope.getcurrentUser = function () {
//         return $scope.currentUser;
//     }
//     $scope.getloggedIn = function () {
//         return $scope.loggedIn;
//     }
//     $scope.setloggedIn = function (status) {
//       $scope.loggedIn = status;  
//     };
// 	$scope.submitForm = function(mail1,pass1) {
//         mail.setMail(mail1);
//         pass.setPass(pass1);
//        /*console.log(mail1);
//        console.log(pass1);
//        console.log(mail.getMail());
//        console.log(pass.getPass());*/
//         $scope.promise = null;
//         $scope.setPromise = function (data) {
//             $scope.promise = data;
//         }
//         $scope.getPromise = function () {
//             return $scope.promise;
//         }
//         $scope.setPromise( firebase.auth().signInWithEmailAndPassword(mail1, pass1)
// 	    .catch(function(error) {
// 	  // Handle Errors here.
// 		  var errorCode = error.code;
// 		  var errorMessage = error.message;
// 		  if (errorCode === 'auth/wrong-password') {
// 		    alert('Wrong password.');
//             return false;
// 		  } else {
// 		    alert(errorMessage);
//             return false;
// 		  }
// 		  }));
// 		  console.log(error);
//         if (error) {
//             $scope.setloggedIn(true);
//             console.log($rootScope.check)
//             $rootScope.check = true;
//             console.log($rootScope.check)
//             $window.location.assign('#!/survey');
//         } 
     
//     }
//     $scope.islogged = function () {
//       firebase.auth().onAuthStateChanged(function(user) {
//         if (user && $scope.getloggedIn() == false && $scope.contador == 1 ) {
//             $scope.setloggedIn(true);
//             $scope.setcurrentUser(user.He.email);
//             //console.log(user);
//             alert('Welcome  ' + user.He.email );
//             //$location.path('#!/login');
//             //$route.reload();
//             $scope.contador ++;
//             console.log($scope.contador);
//             $rootScope.check = true;
//             return true;
//             $window.location.reload();
//         }
//         else {
//             alert('Oops! You must be loggedIn to get access to the surveys! :-)');
//             $scope.setcurrentUser(null);
//             $scope.setloggedIn(false);
//              $rootScope.check = false;
//             return false;
//         }
//         });
//         /*if (logi) {
//           // User is signed in.
//             $scope.setloggedIn(true);
//             $scope.setcurrentUser(user);
//             alert('Bienbenido' + user );
//             return true;
//         } else {
//           // No user is signed in.
//             alert('Log in to get access to the surveys!');
//             $scope.setcurrentUser(null);
//             $scope.setloggedIn(false);
//             return false;
//         }
//         */
//     };
//     $scope.logout = function () {
//         firebase.auth().signOut().then(function() {
//         // Sign-out successful.
//         }).catch(function(error) {
//         // An error happened.
//         });
//         alert('Thanks for use our services, see you soon! ;-)');
//         $scope.contador = 1;
//         $location.path('#!/');
//         $route.reload();
//     };
// });