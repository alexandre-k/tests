angular.module('app', ['ui.unique'])
.controller('MainController', function($scope){
    $scope.items = [
    { id:1, firstname: 'John', lastname: 'Smith' },
    { id:2, firstname: 'Sally', lastname: 'Jones' },
    { id:3, firstname: 'Keith', lastname: 'Smith' },
    { id:4, firstname: 'John', lastname: 'Doe' },
    { id:5, firstname: 'Jenn', lastname: 'Doe' }
    ];
});
