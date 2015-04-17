'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'add-recipe/add-recipe.html',
    controller: 'AddRecipeCtrl'
  });
}])

.controller('AddRecipeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    $scope.editing=false;
    $scope.addRecipe = function () {
        Restangular.all('add-recipe').customPOST($scope.recipe).then(function(recipe) {
            alert("Recipe was successfully created!" + recipe.id)
            $scope.recipe = {};
        }, function (error) {
            alert("There was a problem adding your recipe" + error.status + " " +error.statusText);
        });
    }
}]);