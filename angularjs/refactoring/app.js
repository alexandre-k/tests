var _ = require('underscore');
var request = require('http');

function format(flyover, i) {
    console.log('Flyover at ' + flyover.risetime);
}

function gotRefreshedData(response, body_json, formatter) {
    /*
     * console.log('Response:', response);
     */
    console.log('Body JSON: ', body_json);
    /*
     * _.each(body_json, formatter);
     */
}

function processFlyoverData(flyover) {
    return {
        risetime: new Date(flyover.dt*1000),
        duration: flyover.dt
    };
}

function refreshData(format) {
    var api_key = "90baceb48d00dfbcccb714fd69ba0750"
    var url1 = "http://api.open-notify.org/iss-pass.json?lat=50.8&lon=-0.3667";
    var url2 = "http://api.openweathermap.org/data/2.5/forecast?lat=50.8&lon=-0.3667&APPID=" + api_key;
    request.get(url1, function(err, response, body_json) {
        gotRefreshedData(response, body_json, format);
    });
    request.get(url2, function(response) {
        var body = '';
        console.log(Object.keys(response))
        response.on('data', function(chunk) {
            body += chunk;
        });
        response.on('end', function() {
            _.each(JSON.parse(body), function(flyover) {
                var flyovers = _.map(flyover, function(flyover) {
                    date = new Date(flyover.dt*1000);
                    console.log(date);
                });
            });
        });
        });
}

refreshData(format);
console.log(_.VERSION);
