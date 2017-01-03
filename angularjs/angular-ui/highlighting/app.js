angular.module('app', ['ui.highlight', 'ngSanitize'])
.controller('MainController', function($scope){
    $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra urna vel nibh dictum suscipit. Mauris at elit vehicula, pharetra nisi at, tristique felis. Praesent pharetra sapien nec quam venenatis, et sodales tellus viverra. Ut ornare blandit est, vel bibendum massa ultrices eu. Suspendisse massa mauris, euismod quis augue sit amet, placerat lacinia lorem. Duis vehicula metus lacus, eget tempus quam commodo at. Quisque non lacus accumsan quam commodo efficitur. Proin id pharetra nisl. Nulla facilisi.' 
});
