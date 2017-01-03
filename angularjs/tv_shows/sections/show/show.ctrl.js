angular.module('app.core').controller('ShowCtrl', function(ShowService){
    var self = this;
    ShowService.get(1399).then(function(response){
        console.log(response);
    }).catch(function(error){});
})
