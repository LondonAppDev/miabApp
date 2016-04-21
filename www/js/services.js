var app = angular.module('miabApp.services', []);

app.service('WebService', function($http) {

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
