angular.module('item.controllers', [])

.controller('HomeController', ['$scope', '$location', 'Item', function($scope, $location, Item){
    $scope.getItem = function () {
            $location.path('/data');
        }
}]);