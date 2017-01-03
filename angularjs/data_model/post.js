angular.module('app')
.provider('Post', function(){
    this.$get = ['$resource', function($resource){

        postmethods = $resource('http://localhost:3000/api/post/:_id', {}, {
                update: {
                    method: 'PUT'
                }
                });

        function Post(attributes) {
            this.$save = new postmethods().$save();
        }

        Post.query = postmethods.query;
        Post.update = postmethods.update;
        Post.delete = postmethods.delete;

        return Post;
    }];
});
