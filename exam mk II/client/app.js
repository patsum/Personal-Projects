var app = angular.module('Final', ['ngRoute', 'ngResource', 'Final.factories', 'Final.controllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/:id', {
        templateUrl: 'views/singlebook.html',
        controller: 'SingleController'

    });
    
}]);