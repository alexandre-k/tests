var app = angular.module('choreApp', []);

app.controller('choreCtrl', function($scope){
    $scope.logChore = function(chore) {
        console.log(chore + ' is done');
    }
})
app.directive('kid', function() {
    return {
        restrict: 'E',
        scope: {
            done: '&'
        },
        template: "<input type='text' ng-model='chore'>\
            {{chore}}\
            <div class='button' ng-click='done({chore:chore})'>Done</div>"
    }
})

app.controller('drinkCtrl', function($scope) {
    $scope.ctrlFlavor = 'blackberry';
});

app.directive('drink', function(){
    return {
        scope: {
            flavor: '='
        },
        template: "<input type='text' ng-model='flavor'>",
        /*
         * link: function(scope, element, attrs) {
         *     scope.flavor = attrs.flavor;
         * }
         */
    }
})

app.controller('phoneCtrl', function($scope) {
    $scope.callHome = function() {
        console.log('message');
    }
})

/*
 * app.directive('phone', function(){
 *     return {
 *         scope: {
 *             dial: '&'
 *         },
 *             template: "<input type='text' ng-model='value'> + \
 *             <div class='button' ng-click='dial({{message:value}})'>Call home!</div>"
 *         }
 *     }
 * )
 */

var myphone = angular.module('phoneApp', []);

var phoneAppstuff = {}

phoneAppStuff.controllers = {};
phoneAppStuff.controllers.AppCtrl = function($scope) {
    this.sayHi = function() {
        console.log('Hi')
    return $scope.AppCtrl = this;
    }
}

phoneAppStuff.directives = {}
phoneAppStuff.directives.panel = function () {
    return {
        restrict: 'E'
    }
}

myphone.directive(phoneAppStuff.directives);
myphone.controller(phoneAppStuff.controllers);
