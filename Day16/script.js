var app = angular.module("ChommiesApp", ["ngRoute", "firebase"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider) {
 $routeProvider.when("/", {
   templateUrl: "templates/feed.html"
 })
 $routeProvider.when("/me", {
   templateUrl: "templates/me.html"
 })
});


app.controller("FeedCtrl", function($scope, $http, $firebaseArray, $timeout) {
 var propRef = firebase.database().ref().child("props");
 var bruRef = firebase.database().ref().child("brus");
 $scope.props = $firebaseArray(propRef);
 $scope.brus = $firebaseArray(bruRef);
 $scope.newProp = {};

 // When I send:
 // - Check sentiment API
 // - Make sure there's a prop
 // - Make sure I'm not the receiver

 $scope.addProp = function() {
   $scope.successMessage = "";
   $scope.errorMessage = "";
   if ($scope.newProp.text && $scope.newProp.receiver) {
     $http({
       method: "GET",
       url: "https://twinword-sentiment-analysis.p.mashape.com/analyze/",
       headers: {
         "X-Mashape-Key": "Kl8DKH9lt6mshkPPsBYgmL7YHEaYp16KOfhjsnNJ5XkW2acY1m",
       },
       params: {
         text: $scope.newProp.text
       },
       dataType: "jsonp"
     }).then(function(response) {
         console.log(response.data.score);
         if (response.data.score > 0.1) {
           $scope.props.$add($scope.newProp);
           $scope.newProp = {};
           $scope.successMessage = "Nice! You contributed to the positivity of the world."
           $timeout(function() {
             $scope.successMessage = "";
           }, 3000); 
         }
         else {
           $scope.errorMessage = "Please be nice"
         }
     });
   } else {
       $scope.errorMessage = "Please make sure to choose a receiver, and add some positive text!"
   }
 }

});