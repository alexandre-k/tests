angular.module('app.routes', ['ngRoute'])
    .config(routes);

function routes($routeProvider, $locationProvider) {
    console.log('executed');
    // $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'sections/whats-on/whats-on.tpl.html',
            controller: 'WhatsOnCtrl',
            // controllerAs: 'whatsOn'
        })
        .when('/my-shows', {
            templateUrl: 'sections/my-shows/my-shows.tpl.html',
            controller: 'MyShowsCtrl',
            controllerAs: 'myShows'
        })
        .when('/search', {
            templateUrl: 'sections/search/search.tpl.html',
            controller: 'SearchCtrl',
            controllerAs: 'search'
        })
        .when('/show/:id', {
            templateUrl: 'sections/show/show.tpl.html',
            controller: 'ShowCtrl',
            controllerAs: 'show'
        })
        .otherwise({
            redirectTo: '/'
        });
};
