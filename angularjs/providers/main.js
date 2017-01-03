var app = angular.module('app', []);

app.factory('game', function() {
    return {
        title: 'StarCraft'
    }
});

app.controller('AppCtrl', function($scope, $injector) {
    $injector.invoke(function(game) {
        $scope.title = game.title;
    })
});

app.directive('clock', function(){
    return {
        restrict: 'E',
        scope: {
            timezone: '@'
        },
        template: "<div>12:00 {{timezone}}</div>"
    }
})

app.directive('panel', function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        template: "<div style='border: 3px solid #000000'>" +
            "<div class='alert-box'>{{title}}</div> " +
            "<div ng-transclude></div>" +
            "</div>"
    }
})

app.run(function($rootScope, $log){
    $rootScope.$log = $log;
})
