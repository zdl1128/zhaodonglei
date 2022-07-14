'use strict';

angular.module('myApp.Key-In-View',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7/Key-In-View', {
    templateUrl: 'view7/Key-In-View/Key-In-View.html',
    controller: 'Key-In-View'
  });
}])

.controller('Key-In-View', [function() {

}]);