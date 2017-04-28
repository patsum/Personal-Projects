angular.module('test.controllers', [])

.controller('HomeController', ['$scope', '$location', '$routeParams', 'Item', function($scope, $location, $routeParams, Item){
     
    $scope.getItem = function () {
            $location.path('/item');
            // $scope.data = Item.query();
           var i = Item.get({ id: $routeParams.id }, function (success) {
                $scope.item = success;
            });
        }
}])
.controller('ItemController', ['$scope', '$location', '$routeParams', 'Item', function($scope, $location, $routeParams, Item){
    // getItem = function() {
        // $location.path('/item');
        Item.get({ id: $routeParams.id }, function (success) {
                $scope.item = success[0];
            });
}])