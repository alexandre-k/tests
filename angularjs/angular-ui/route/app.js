angular.module('app', ['ngRoute','ui.router'])
.config(function($routeProvider, $locationProvider){
    $routeProvider.otherwise({
        templateUrl: 'main.html',
        controller: 'MainController'
    });
    $locationProvider.html5Mode.enabled;
})
.controller('MainController', function($scope){
    $scope.routes = ['route1', 'route2', 'route3']
})
