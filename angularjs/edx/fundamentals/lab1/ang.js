'use strict';

var app = angular.module("dateApp", []);

app.controller("getDate",  function($scope){
    $scope.current_time = Date();
});
