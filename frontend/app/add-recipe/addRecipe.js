'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add-recipe', {
            templateUrl: 'add-recipe/add-recipe.html',
            controller: 'AddRecipeCtrl'
        });
    }])

    .controller('AddRecipeCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {

        $scope.recipe = {
            ingredients: []
        };

        $scope.addIngredientToRecipe = function(ingredientName) {
            if (ingredientName != null) {
                var ingredient = {name: ingredientName};
                $scope.recipe.ingredients.push(ingredient);
                $scope.ingredientName = null;
            }
        };

        $scope.removeIngredientFromRecipe = function(ingredient) {
            var index = $scope.recipe.ingredients.indexOf(ingredient);
            if (index != -1) {
                $scope.recipe.ingredients.splice(index, 1);
            }
        };

        $scope.addPhoto = function () {
            var file = document.getElementById('file').files[0],
                reader = new FileReader();
            reader.onload = function (e) {
                $scope.recipe.photo = 'data:image/png;base64,' + btoa(e.target.result);
                $scope.$apply();
            };
            reader.readAsBinaryString(file);
        };

        $scope.addRecipe = function () {
            Restangular.all('add-recipe').customPOST($scope.recipe).then(function () {
                toastr.success("You successfully added the recipe!");
                document.getElementById('file').value = null;
                $scope.$apply();
                $scope.recipe.photo = null;
                $scope.recipe = {ingredients: []};
            }, function () {
                toastr.error("There was a problem creating your recipe");
            });
        };
    }]);
