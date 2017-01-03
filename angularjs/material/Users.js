angular.module('users', ['ngRoute', 'ngMaterial', 'ngResource'])
    .config(function($routeProvider, $locationProvider){
        /*
         * $locationProvider.html5Mode(true);
         */
        $routeProvider
        .when('/home', {
            templateUrl: 'index.html',
            controller: 'UserController'})
        .when('/user/:id', {
            controller: 'UserController',})
        .otherwise('/users', {
            controller: 'UserController',
            templateUrl: 'index.html'
            })
    })

