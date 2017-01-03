var app = angular.module('app', []);

app.directive('ehSimple', function(){
    return {
        scope: {
            ehSimple: '='
        },
        link: linkFn
    }
    function linkFn (scope, element){
        element.hasClass('plain');

        element.bind('click', function() {
            scope.clicked = true;

            scope.ehSimple.message += ' world';
        });
    }
});
