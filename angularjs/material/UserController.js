angular.module('users').controller('UserController', UserController);

function UserController(UserFactory, $routeParams) {
    /*
     * var self = this;
     */
    console.log($routeParams);
    var users = UserFactory.query();
    console.log(users);
    users.$promise.then(function(){
        angular.forEach(users, function(user){
            console.log(user);
            console.log('something else');
        });
    });
    console.log('something');
    /*
     * var user = UserFactory.get({id:$routeParams.id});
     * console.log(user);
     */
/*
 *
 *     self.selected   = null;
 *     self.users      = [];
 *     self.selectUser = selectUser;
 *     self.toggleList = toggleUsersList;
 *     self.share      = share;
 */

    /*
     * UserService.loadAllUsers()
     *     .then(function(users) {
     *         self.users    = [].concat(users);
     *         self.selected = users[0];
     *     });
     */
};
