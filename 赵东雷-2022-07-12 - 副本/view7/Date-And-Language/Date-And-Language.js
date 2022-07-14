'use strict';

angular.module('myApp.Date-And-Language', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view7/Date-And-Language', {
      templateUrl: 'view7/Date-And-Language/Date-And-Language.html',
      controller: 'Date'
    });
  }])

  .controller('Date', function ($scope, $http, $interval) {
    $scope.timelist = []
    $scope.calendarlist = []
    $scope.selected = '1'
    $scope.time = new Date().toLocaleString()
 
    $interval(function () {
      $scope.date = new Date().toLocaleString()
    }, 1000)
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:5500/Json/timeZone.json'
    }).then((res) => {
        $scope.timelist = res.data
      }

    )
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:5500/Json/calendar.json'
    }).then((res) => {
        $scope.calendarlist = res.data
      }

    )


  });