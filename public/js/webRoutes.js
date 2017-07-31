console.log('Running webRoutes.js');
// public/js/webRoutes.js

    angular.module('webRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'WebController'
        })

        // nerds page that will use the NerdController
        .when('/events', {
            templateUrl: 'views/events.html',
            controller: 'EventController'
        });

    $locationProvider.html5Mode(true);

}]);
