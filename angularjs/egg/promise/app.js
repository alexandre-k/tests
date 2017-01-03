var app = angular.module('app', []);

app.controller('AppCtrl', function($q, $timeout){
    var one = $q.defer();
    var two = $q.defer();
    var three = $q.defer();
    var four = $q.defer();

    var all = $q.all([
        one.promise,
        two.promise,
        three.promise,
        four.promise
    ]);
    all.then(success)

    function success (data) {
        console.log(data);
    }

    one.promise.then(success)
    two.promise.then(success)
    three.promise.then(success)
    four.promise.then(success)


    $timeout(function() {
        one.resolve('one done');
    }, Math.random() * 1000)

    $timeout(function() {
        two.resolve('two done');
    }, Math.random() * 1000)

    $timeout(function() {
        three.resolve('three done');
    }, Math.random() * 1000)
    
    $timeout(function() {
        four.resolve('four done');
    }, Math.random() * 1000)



})
