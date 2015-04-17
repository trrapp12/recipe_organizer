'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipe-detail/recipe-detail.html',
    controller: 'RecipeDetailCtrl'
  });
}])

.controller('RecipeDetailCtrl', ['$scope', '$routeParams','$location','Restangular', function($scope, $routeParams, $location, Restangular) {
    $scope.recipeId = $routeParams.recipeId;

    Restangular.one('recipes', $scope.recipeId).customGET().then(function (recipe) {
        $scope.recipe=recipe;

        });
    $scope.deleteRecipe = function() {
        var confirmation = confirm("Are you sure you want to delete this recipe? This cannot be undone.");

        if (confirmation) {
            Restangular.one("recipes", $scope.recipeId).customDELETE().then(function () {
                alert("Your recipe was successfully deleted!");
                $location.path('/recipes');
            }, function () {
                alert("There was a problem deleting the recipe!  :(")
            });
        }
    };

    $scope.savedEditRecipe = function() {
        Restangular.one("recipes",$scope.recipeId).customPUT($scope.recipe).then(function() {
            alert("Your recipe has been updated successfully!");
            $scope.editing=false;
        },
        function() {
            alert("Something went wrong updating the recipe...");
        });
    };
}]);