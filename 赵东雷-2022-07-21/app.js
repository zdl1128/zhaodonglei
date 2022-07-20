'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.view7',
  'myApp.view8',
  'myApp.view9',
  'myApp.view10',
  'myApp.view11',
  'myApp.version',
  'components',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('myCtrl', function($scope,$rootScope) {
  $scope.activeOneMenuClass = ''
  $scope.oneMenuClick = function(name){
    this.activeOneMenuClass = name
  };

  $scope.onJumpPage = function (url) {
    window.location.href ="http://127.0.0.1:3000/index.html"+ url
  }
});
