angular.module('Mocks')
.factory('Post', ['BaseClass', function(BaseClass) {
    function Post() {};
    return Post;
}]);
