'use strict';

angular.module('myApp.view11', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view11', {
    templateUrl: 'view11/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);