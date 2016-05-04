// Get our app module.
var app = angular.module('miabApp.services', []);

// Create our WebService service.
app.service('WebService', function($http) {

    // This is the base URL for our REST API. Since we will be using the
    // ionic proxy
    var WS_BASE_URL = '/api';

    return {
        tradeMessage: function(message, onSuccess, onError) {
            var data = {'message': message};
            $http.post(WS_BASE_URL + '/message/', data).then(
                onSuccess,
                onError
            );
        }
    }

});
