// public/js/appRoutes.js

    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    console.log("RouteProvider", $routeProvider);
    var path = require('path');

    $routeProvider

        // home page
        .when('/', {
            templateUrl: path.resolve('/views/home.html'),
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: path.resolve('/views/nerd.html'),
            controller: 'NerdController'
        });

    $locationProvider.html5Mode(true);

}]);

