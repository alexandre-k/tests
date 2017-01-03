var app = angular.module('app', ['ui.router',
                                 'ngResource'
]);
    app.config(function config($stateProvider) {
        $stateProvider.state('first', {
            url: '/first',
            controller: 'FirstCtrl as first',
            templateUrl: 'templates/first.html'
        });
        $stateProvider.state('second', {
            url: '/second',
            controller: 'SecondCtrl as second',
            templateUrl: 'templates/second.html'
        });
    });

app.filter('reverse', function(Data){
    return function(text) {
        return text.split('').reverse().join('') + ' ' + Data.message;
    };
});

app.controller('FirstCtrl', ['$scope', 'Data', 'greeting', function FirstCtrl($scope, Data, greeting) {
        var first = this;
        console.log('nothing;')
        first.greeting = 'First';
        $scope.data = Data;
    }]);

app.controller('SecondCtrl', ['$scope', 'Data', 'greeting', function SecondCtrl($scope, Data, greeting) {
        var second = this;
        second.greeting = 'Second';

        $scope.data = Data;

        $scope.reversedMessage = function() {
            return $scope.data.message.split('').reverse().join('');
        };
    }]);

app.controller('displayPostCtrl', ['$scope', 'postFactory', function(postFactory) {
    console.log(postFactory.get({postId:1}))

}])

app.service('greeting', function Greeeting(){
        var greeting = this;
        greeting.message = 'Default';
    });

app.factory('Data', function() {
    return {message: 'I\'m data from a service'};
});

app.factory('postFactory', function($resource) {
        var url = 'https://jsonplaceholder.typicode.com';

        return $resource(url + '/:postId', {postId:'@postId'});
});
