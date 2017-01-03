var app = angular.module('app', ['ngMessages', 'ngAnimate']);

app.controller('msgCtrl', msgCtrl);
function msgCtrl(){};

var interceptor = function($q, $location) {
    return {
        request: function(config){
            console.log('******* In config')
            config.url = config.url.replace('posts', 'toto')
            console.log(config);
            console.log('****************')
            return config;
        },
        response: function(result){
            console.log('Repos:');
            result.data.splice(0,10).forEach(function(repo){
                console.log(Object.keys(repo))
                console.log(repo.name);
            })
            return result;
        },
        responseError: function(rejection){
            console.log('Failed with', rejection.status, 'status');
            if (rejection.status == 404) {
                $location.url('/login');
            }
            return $q.reject(rejection);
        }
    }
};
app.config(function($httpProvider){
    $httpProvider.interceptors.push(interceptor);
})

app.run(fetchData);
function fetchData($http){
    var promise = $http.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Promise object: ' + promise);
    console.log(Object.keys(promise))
    promise.then(function(response){
        console.log('promise resolved');
        console.log(response.data)
    })
}

app.factory('postCache', function($cacheFactory){
    return $cacheFactory('people');
})

app.controller('AppCtrl', function($log, $http, postCache) {
    var self = this;
    url = 'https://jsonplaceholder.typicode.com/posts'
    self.loadPosts = function(){
        $http.get(url, {cache:postCache}).then(
            function(response){
                console.log(postCache);
                self.posts = response.data
            }
        )
    }
    self.clearCache = function(){
        postCache.remove(url)
        $log.warn('Cache cleared')
    }
    
})

app.factory('mixinto', mixinto);
function mixinto(mixin) {
    angular.extend(mixinto, mixin);
    console.log(Object.keys(mixinto))
    var self = this;
    var self = {cool: false};
    console.log('after self ' + mixinto.cool)
    console.log(Object.keys(mixinto))
    return mixinto;
}
mixinto.$inject = ['mixin']

app.factory('mixin', mymixin);
function mymixin(){
    return {cool:  true}
}

