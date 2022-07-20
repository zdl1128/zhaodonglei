'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view1.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {

}]);