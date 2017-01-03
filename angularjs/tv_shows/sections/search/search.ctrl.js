angular.module('app.core').controller('SearchCtrl', function(ShowService, $timeout, StoreFactory) {
    var self       = this;
    self.test = 'Some text';
    self.results   = false;
    self.searching = false;
    self.query     = function(query) {
        console.log('searching');
        self.searching = true;
        ShowService.search(query).then(function(response){
            self.results = response;
            console.log(response);
            $timeout(function(){
                self.searching = false;
            }, 500);
        }).catch(function(error){
            console.log(error);
        });
    };
    /*
     * self.query('Game of Thrones');
     */
/*
 *
 *     self.trackShow = function(show){
 *         StoreFactory.addShow(show);
 *     };
 *
 *     self.unTrackShow = function(id){
 *         StoreFactory.removeShow(id);
 *     };
 *
 *     self.hasShow = function(id){
 *         return (StoreFactory.getShow(id) !== false);
 *     };
 */
});
