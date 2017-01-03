var app = angular.module('app', ['ngStorage']);

app.controller('AppCtrl', function($scope, $localStorage){
    $scope.saveData = function(){
        $localStorage.message = 'Hello World';
    }

    $scope.loadData = function(){
        $scope.message = $localStorage.message
    }
})
