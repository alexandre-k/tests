angular.module('myDirectives', [])
    
    .directive('myCircle', function() {
        return {
            templateUrl : './circle.html',
            controller : ['$scope,', '$rootScope', function($scope, $rootScope) {
                $scope.afterClick = function() {
                    $rootScope.$broadcast('clicked');
                };
            }],
            link : function(scope, element) {
                element.on('click', function(){
                    scope.$apply(function() {
                        scope.afterClick();
                    });
                });
            }
        };
    })

    .directive('myRectangle', function() {
        return {
            templateUrl : './rectangle.html',
            restrict : 'E',
            replace : true,
            controller : ['$scope', function($scope) {
                $scope.$on('clicked', function() {
                    console.log('clicked');
                    $scope.clicked = true;
                });
            }]
        };
    })

    .constant('SOCIAL', {
        'facebook': 'Facebook',
        'twitter' : 'Twitter',
        'github': 'Github'
    })

    .factory('faSocialClassName', function() {
        return function(name) {
            return 'fa fa-' + name;
        };
    })

    .controller('SocialCtrl', ['$scope', 'SOCIAL', function($scope, SOCIAL) {
        console.log(SOCIAL);
        $scope.services = SOCIAL;
    }])
    
    .directive('socialItem', ['SOCIAL', 'faSocialClassName', function(SOCIAL, faSocialClassName) {
        // console.log(scope, element, attrs);
        return function(scope, element, attrs) {
            element.html('<span class="' + faSocialClassName(attrs.socialItem) + '"></span>');
        };
    }]);
