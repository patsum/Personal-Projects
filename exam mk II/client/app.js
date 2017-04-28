var app = angular.module('test', ['ngRoute', 'ngResource', 'test.factories', 'test.controllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/item', {
        templateUrl: 'views/item.html',
        controller: 'HomeController'

    });
    
}]);