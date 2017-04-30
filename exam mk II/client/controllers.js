angular.module('Final.controllers', [])

.controller('HomeController', ['$scope', '$location', 'Book', function($scope, $location, Book){
    $scope.books = Book.query();
    $scope.getBook = function () {
            $location.path('/book');
            
        }

     
}])
.controller('SingleController', ['$scope', '$location', '$routeParams', 'Book', 
    function ($scope, $location, $routeParams, Book) {
            Book.get({ id: $routeParams.id }, function (success) {
                $scope.book = success;
            })
    }]);