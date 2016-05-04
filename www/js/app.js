
// Define our app and include the following:
// - ionic - the framework.
// - ui.router - angular JS UI router for URLs.
// - miabApp.controllers - our custom controllers for adding functionality to our screens.
// - miabApp.services - our custom services for accessing the REST API.
app = angular.module('miabApp', [
    'ionic',
    'ui.router',
    'miabApp.controllers',
    'miabApp.services',
]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

    // Default to the home state.
    $urlRouterProvider.otherwise('/');

    // Assign the home state to '/' for displaying the enter message screen.
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'templates/enter_message.html',
        controller: 'EnterMsgCtrl',
        cache: false
    });

    // Assign the message state to '/message' for displaying a message.
    $stateProvider.state('message', {
        url: '/message',
        templateUrl: 'templates/view_message.html',
        controller: 'ViewMsgCtrl'
    });

});
