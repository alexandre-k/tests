var app = angular.module('app', []);

/*
 * app.controller('AppCtrl', ['$http', 'droid', function($http, droid){
 *     var app = this;
 */
/*
 *
 *     var data = {
 *         "users": [{
 *             "id": "1",
 *             "name": "Alexandre Krispin"
 *         }, {
 *             "id": "2",
 *             "name": "Zhu Chiqong"
 *         }]
 *     };
 *
 *     var url = {
 *         params: data,
 *         headers: {'Accept': 'application/json'}
 *     }
 *     $http.get(url).success(function (res) {
 *         console.log('res: ' + res);
 *     })
 *
 *     app.addPerson = function(person) {
 *         $http.post('http://localhost:3000/users', person)
 *             .success(function(data){
 *                 app.people = data;
 *             })
 *     }
 */

app.controller('DroidController', DroidController);

function DroidController(droid){
    app.droid = new DroidService();
    droid.name = 'r2-d2';
    console.log(droid.speak());
};

app.service('DroidService', DroidService);

function DroidService(droid) {
    this.name = '';
    this.speak = function(){
        return 'Hi I am ' + this.name;
    };
};

app.factory('DroidFactory', droidFactory);

function droidFactory() {
    return {
        name: '',
        speak: function() {
            return 'Hi I am ' + this.name;
        }
    }
}

var droid = droidFactory();
droid.name = 'c3-po';
console.log(droid.speak());

function droidFactoryRevealingPattern() {
    function speakingPrivately() {
        return 'Hi I am ' + this.name;
    }

    return {
        name: '',
        speak: speakingPrivately
    }
}

app.controller('DroidController', DroidController);

function DroidController(droid) {
    var droidCtrl = this;
    droid.name = 'c3-po';
    droidCtrl.message = droid.speak();
}


/*
 * To configure services use their providers
 */
app.config(function ($httpProvider) {
    $httpProvider.defaults.cache = true;
})

function droidProvider() {
    var greeting = ''
    return {
        configure: function(settings) {
            greeting = settings.greeting;
        },
        $get: function () {
            return {
                name: '',
                speak: function (){
                    return greeting + this.name;
                }
            }
        }
    }
}

var provider = droidProvider();
provider.configure({greeting: 'Greetings I am '});
var droid = provider.$get();
droid.name = 'ig-88';
console.log(droid.speak());

app.provider('droid', droidProvider)
    .config(function(droidProvider) {
        droidProvider.configure({greeting: 'Greetings I am '});
    })
    .controller('DroidController', DroidController)

    function  DroidController(droid) {
        var droidCtrl = this;
        droid.name = 'ig-88';
        droidCtrl.message = droid.speak();
    }
