var app = angular.module('app', []);

app.config(function($anchorScrollProvider){
    $anchorScrollProvider.disableAutoScrolling();

})

app.controller('AppCtrl', function($scope, $location, $anchorScroll) {
    console.log($scope);
    /*
     * var self = this;
     * self.elms = 'ABCDEEFGHIJKLMNOPQRSTUVWXYZ'.split('');
     * var colors = tinycolor.analogous('steelblue', self.elms.length, self.elms)
     * self.goToAnchor = function(elm) {
     *     $location.hash(elm);
     *     $anchorScroll();
     * }
     * self.createStyle = function(index){
     *     var color = colors[index]
     *     return {
     *         background: color.toHexString(),
     *         borderBottom: '3px solid black',
     *         height: '100px'
     *     };
     * }
     */
})

app.directive('myDirective', function(){
    return {
        link: function(scope, element, attrs){
            console.log(scope);
        }
    }
})
