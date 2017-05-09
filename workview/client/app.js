var app = angular.module('workView', ['workView.factories','workView.controllers', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

$routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    css: 'styles.css'
})
$routeProvider.when('/resume', {
    templateUrl: 'views/patrick.html',
    controller: 'PatrickController',
    css: 'styles.css'
});

}]);