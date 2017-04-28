angular.module('test.controllers', [])

.controller('HomeController', ['$scope', '$location', 'Item', function($scope, $location, Item){
    $scope.getItem = function () {
            $location.path('/item');
            $scope.data = Item.query();
        }

}]);