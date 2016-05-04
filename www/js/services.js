// Get our app module.
var app = angular.module('miabApp.services', []);

// Create our WebService service.
app.service('WebService', function($http) {

    // This is the base URL for our REST API. Since we will be using the
    // ionic proxy, we can exclude the FQDN and port number.
    var WS_BASE_URL = '/api';

    // All 'puclic' functions need to be inside a return statement.
    return {

        // This is our function for trading a message.
        tradeMessage: function(message, onSuccess, onError) {
            // Create our payload variable called 'data'.
            var data = {'message': message};
            // Use $http to post to our /message endpoint.
            $http.post(WS_BASE_URL + '/message/', data).then(
                // Call the onSuccess function if it's successful.
                onSuccess,
                // Call the onError function if it fails.
                onError
            );
        }
    }

});
