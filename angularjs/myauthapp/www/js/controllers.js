angular.module('starter.controllers', [])

    .controller('LoginCtrl', function($scope, AuthService, $ionicPopup, $state){
        $scope.user = {
            name: '',
            password: '',
        };

        $scope.login = function() {
            AuthService.login($scope.user).then(function(msg) {
                $state.go('inside');
            }, function(errMsg) {
                var alertPopup = $ionicPopup.alert({
                    title:'Login failed',
                    template:  errMsg
                });
            });
        };

})

    .controller('RegisterCtrl', function($scope, AuthService, $ionicPopup, $state) {

        $scope.user = {
            name: '',
            password: ''
        };

        $scope.signup = function() {
            AuthService.register($scope.user).then(function(msg) {
                $state.go('outside.login');
                var alertPopup = $ionicPopup.alert({
                    title: 'Register success!',
                    template: msg
                })
            }, function(errMsg) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Register failed!',
                    template: errMsg
                });
            });
        };

})

.controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state) {
        $scope.destroySession = function() {
            AuthService.logout();
        };

        $scope.getInfo = function() {
            $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
                $scope.memberinfo = result.data.msg;
            });

        };

        $scope.logout = function() {
            AuthService.logout();
            $state.go('outside.login');
        };
    })

    .controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
        $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
            AuthService.logout();
            $state.go('outside.login');
            var alertPopup = $ionicPopup.alert({
                title: 'Session Lost!',
                template: 'Sorry, You have to login again.'
            });
        });
    })


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
