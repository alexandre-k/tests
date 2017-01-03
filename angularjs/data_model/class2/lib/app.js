var app = app.module('app', []);

/*
 * Different objects, won't update together
 */
app.controller('ThirdCtrl' ['$scope', function($scope){
    $scope.user = {data: 'cool'};
}])
.controller('FourthCtrl', ['$scope', function($scope){
    $scope.user = {data: 'cool'};
}])

app.controller('FirstCtrl', ['$scope', 'SmartUserModel', function($scope, SmartUserModel) {
    $scope.user = new SmartUserModel(1);
}])
.controller('SecondCtrl', ['$scope', 'SmartUserModel', function($scope, SmartUserModel) {
    $scope.user = new SmartUserModel(1);
}])
.provider('SmartUserModel', function() {
    this.$get = ['$timeout', function($timeout) {
        var User = function User(id) {
            if (User.cached[id]) return User.cached[id];
            this.data = 'cool';
            User.cached[id] = this;
        };
        User.cached = {};
        return User;
    }];
});
