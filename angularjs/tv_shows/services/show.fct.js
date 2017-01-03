angular
    .module('app.services')
    .constant('API_KEY', 'f826f3b13fa858d4635dfd928c8825cb')
    .constant('BASE_URL', 'https://api.themoviedb.org/3')
    .factory('ShowService', dataService);

function dataService($http, API_KEY, BASE_URL, $log) {
    var data = {
        'get': get,
        'search': search
    };

    function makeRequest(url, params) {
        var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
        angular.forEach(params, function(value, key){
            requestUrl = requestUrl + '&' + key + '=' + value;
        });
        console.log(requestUrl);
        return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).then(function(response){
            return response.data;
        }).catch(dataServiceError);
    }

    function get(id) {
        return makeRequest('tv/' + id, {});
    }

    function search(query) {
        return makeRequest('search/tv', {query: query}).then(function(data) {
            return data.results;
        })
    }

    return data;

    function dataServiceError(errorResponse){
        $log.error('XHR failed for ShowService');
        $log.error(errorResponse);
        return errorResponse
    }
}
