var app = angular.module('miabApp.controllers', []);

app.controller('EnterMsgCtrl', function($scope, $state, WebService) {

    $scope.isError = false;

    $scope.sendMessage = function(msg) {
        if ((msg === undefined) || (msg === null) || (msg === '')) {
            return
        }
        WebService.tradeMessage(msg, handleSuccessResponse, handleErrorResponse);
    };

    function handleSuccessResponse(response) {
        window.localStorage.setItem("message", response.data.message);
        $state.go('message');

    };

    function handleErrorResponse(response) {
        $scope.isError = true;
        $scope.error = 'An error occured.';
    };

});

app.controller('ViewMsgCtrl', function($scope) {
    $scope.message = window.localStorage.getItem('message');

});
