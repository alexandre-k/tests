angular.module('app', ['ui.validate'])
.controller('MainController', function($scope){
    $scope.validatePassword = function(value) {
        return value === $scope.password;
    }
})
