angular.module('app.core').controller('MyShowsCtrl', function(){
    var self = this;
    self.results = StoreFactory.getShows();
    self.unTrackShow = function(id) {
        StoreFactory.removeShow(id);
    };
});
