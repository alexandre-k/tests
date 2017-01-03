angular.module('users')
    .factory('UserFactory', UserFactory)
    .config(['$qProvider', function ($qProvider){
        $qProvider.errorOnUnhandledRejections(false);
    }])

function UserFactory($resource) {
    var url = 'https://jsonplaceholder.typicode.com/users';
    /*
     * var url = 'http://reqres.in/api/users'
     */
    var Users = $resource(url + '/:id', {
        id: '@id'
        /*
         * method: 'GET',
         */
        /*
         * headers: {
         *     'Content-type': 'application/json'
         */
    });
    /*
     * console.log(users);
     */
        /*
         *   dataType: 'json',
         * success: function(data) {
         *         console.log(data);
         *
         */
    return Users;
          
}
