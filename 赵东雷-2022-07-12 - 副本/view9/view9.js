'use strict';

angular.module('myApp.view9', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view9', {
    templateUrl: 'view9/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);