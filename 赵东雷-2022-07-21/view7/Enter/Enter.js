'use strict';

angular.module('myApp.Enter',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7/Enter', {
    templateUrl: 'view7/Enter/Enter.html',
    controller: 'Enter'
  });
}])

.controller('Enter', [function() {

}])
.controller('personCtrl',function($scope){
  $scope.myVar = true;
  $scope.toggle = function(){
    $scope.myVar = !$scope.myVar;
  };    
}

)