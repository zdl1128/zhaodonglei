'use strict';

angular.module('myApp.view7', ['ngRoute','myApp.Date-And-Language','myApp.Language-And-area','myApp.Advanced-Setting','myApp.Key-In-View','myApp.Enter'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'View1Ctrl'
  })
}])

.controller('View1Ctrl', [function() {

}]);