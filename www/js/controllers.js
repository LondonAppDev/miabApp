// Define our app module.
var app = angular.module('miabApp.controllers', []);

// Define our 'EnterMsgCtrl' controller and pass it the app $scope, $state and our
// WebService service.
app.controller('EnterMsgCtrl', function($scope, $state, WebService) {

    console.log("EnterMsgCtrl Controller Launched...");

    // By default there is no error.
    $scope.isError = false;

    // Define a function for sending a message using the WebService.
    $scope.sendMessage = function(msg) {
        // Check the input is valid, if not then return null.
        if ((msg === undefined) || (msg === null) || (msg === '')) {
            return
        }

        // Use the WebService to trade a message, and when the response is
        // called, call our handleSuccessResponse() function. If an error
        // happens, then call handlErrorResponse()
        WebService.tradeMessage(msg, handleSuccessResponse, handleErrorResponse);
    };

    // This is our function for handling a successful web service call.
    function handleSuccessResponse(response) {
        // Set the message in localStorage.
        window.localStorage.setItem("message", response.data.message);
        // Move onto the message screen.
        $state.go('message');
    };

    // This is our function for handling a failed web service call.
    function handleErrorResponse(response) {
        // Set the scopes isError variable to true.
        $scope.isError = true;
        // Set the scropes error message. NOTE: Ideally we should set the error
        // message based on the response. In the interest of simplicity for
        // this article I will just set it to display the hard coded message
        // below.
        $scope.error = 'An error occured.';
    };

});

// This is our 'ViewMsgController' for displaying a message.
app.controller('ViewMsgCtrl', function($scope) {
    // The message is set in localStorage, so all we need to do is set it.
    $scope.message = window.localStorage.getItem('message');
});
