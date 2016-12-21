'use strict';

angular.module('blogList').
    component('blogList', {
        // template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $routeParams, $rootScope, $scope){
            $scope.goToItem = function(post) {
                $rootScope.$apply(function(){
                    $location.path('/bog/' + post.id)
                })
            }
            $scope.items = Post.query();
                }
            });
