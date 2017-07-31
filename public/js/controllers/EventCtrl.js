console.log('Running EventCtrl.js');
// public/js/controllers/EventCtrl.js

angular.module('EventCtrl', []).controller('EventController', function($scope, $http) {

    $scope.tagline = 'Events (EventController generator)!';
    $http.get('http://localhost:8888/api/events')
         .then(function (res) {
             $scope.events = res.data;
         });
//         .error(function (data, status, headers, config) {
             //  Do some error handling here
//         });
//    $scope.events = 'Events2 (EventController generator)!';

});
