'use strict';

angular.module('confirmClick')
    .directive('confirmClick', function($rootScope, $location) {
        return {
            scope: {
                message: '@message',
                eq: '=eq',
                post: '=post',
            },
            restrict: 'E',
            template: "<a href='/#blog/{{post.id}}'>{{ post.title }}</a>",
            link: function(scope, element, attribute){
                var msg = scope.message || 'Are you sure?'
                var clickAction = attribute.confirmedClick;
                element.bind('click', function(event){
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    if (window.confirm(msg)){
                        scope.$eval(clickAction)
                    } else {
                        console.log('Cancelled')
                    }
                })
                console.log(scope.post)
            }
        }
    })
