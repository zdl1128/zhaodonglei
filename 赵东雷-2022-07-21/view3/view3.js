'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view1.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {

}]);