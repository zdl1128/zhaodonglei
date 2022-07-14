'use strict';

angular.module('myApp.view10', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view10', {
    templateUrl: 'view10/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);