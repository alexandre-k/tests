var app = angular.module('superhero', []);

app.directive('superman', function(){
    return {
        restrict: 'E',
        template: '<div>Here I am to save the day</div>'
    }
})

app.directive('batman', function(){
    return {
        restrict: 'A',
        link: function() {
            alert('I am agains the bad and the evil');
        }
    }
})

var app2 = angular.module('behaviorApp', []);

app2.directive('enter', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('mouseenter', function(){
                console.log('I\'m inside of you');
                element.addClass(attrs.enter);
            });
        }
    };
});

app2.directive('leave', function(){
    return function (scope, element, attrs) {
        element.bind('mouseleave', function() {
            console.log('I am leaving!');
            element.removeClass(attrs.enter);
        });
    };
});
