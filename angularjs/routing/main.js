var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/map/:country/:state/:city',
            {
                templateUrl: 'app.html',
                controller: 'viewCtrl',
                resolve: {
                    loadData: viewCtrl.loadData,
                    /*
                     * prepData: viewCtrl.prepData
                     */
                }
            })
        .when('/pizza', {
            template: 'yum!!',
            controller: 'AppCtrl'
        })
        .when('/pasta/:crust/:toppings', {
            redirectTo: function(routeParams, path, search) {
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return '/';
            }
        })
        .when('/new', {
            templateUrl: 'view/new.html',
            controller: 'NewCtrl',
            resolve: {
                loadData: viewCtrl.loadData
            }
        })
        /*
         * .otherwise({
         *     redirectTo: '/map/USA/Utah/Chicago'
         * });
         */
});

app.directive('error', function($rootScope){
    return {
        restrict: 'E',
        template: "<div class='alert-box alert' ng-show='isError'>Error!!</div>",
        link: function(scope) {
            $rootScope.$on('$routeChangeError', function (event, current, rejection) {
                scope.isError = true;
            })
        }
    }
})

app.controller('AppCtrl', function($rootScope) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        console.log('failed to change routes');
        console.log(event,' - ', current, ' - ', previous, ' - ', rejection)
        console.log(rejection);
    })
})

app.controller('NewCtrl', function($scope, loadData, $template){
    console.log($scope, loadData, $template);
});

var viewCtrl = app.controller('viewCtrl', function($scope, $route, $routeParams, $q){

    console.log($route)
    
    $scope.changeRoute = function(){
        console.log($scope);
        $location.path('/new');
    }
/*
 *
 *     var defer = $q.defer();
 *
 *     defer.promise
 *         .then(function() {
 *         console.log('I promised I would show up');
 *         })
 *     .then(function(weapon){
 *         console.log('mee too and my ' + weapon);
 *         return 'axe'
 *     })
 *     .then(function(weapon){
 *         console.log('and I with my ' + weapon);
 *     });
 *
 *     console.log('I appeared first');
 *
 *     defer.resolve('sword');
 *
 */
    $scope.model = {
        message: 'Address: ' +
            $routeParams.country + ', ' +
            $routeParams.state + ', ' +
            $routeParams.city
    }
})

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve({message: 'success'});
    }, 2000);
    return defer.promise;
};

/*
 * viewCtrl.prepData = function($q, $timeout) {
 *     var defer = $q.defer();
 *     $timeout(function() {
 *         defer.resolve('prepData');
 *         console.log('prepData');
 *     }, 2000);
 *     return defer.promise;
 * };
 */
