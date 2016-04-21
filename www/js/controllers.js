var app = angular.module('miabApp.controllers', []);

app.controller('EnterMsgCtrl', function($scope, $state, WebService) {
    console.log("EnterMsgCtrl Loaded.");

    $scope.sendMessage = function(msg) {
        if ((msg === undefined) || (msg === null) || (msg === '')) {
            return
        }

        console.log("Message: " + msg);
        WebService.tradeMessage(msg, handleSuccessResponse, handleErrorResponse);
    };

    function handleSuccessResponse(response) {
        console.log("handleSuccessResponse():");
        console.log(response);
        console.log("Go...");
        $state.go('message');
    };

    function handleErrorResponse(response) {
        cosole.log("handleErrorResponse():");
        console.log(response);
    };

});

app.controller('ViewMsgCtrl', function($scope) {
    console.log("ViewMsgCtrl Loaded.");
});
