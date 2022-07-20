'use strict';

angular.module('myApp.Advanced-Setting',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7/Advanced-Setting', {
    templateUrl: 'view7/Advanced-Setting/Advanced-Setting.html',
    controller: 'Advanced-Setting'
  });
}])

.controller('Advanced-Setting', function($scope,$http) {
  $scope.languagelist=[]
  $scope.language=undefined
  $scope.getLanguage=function(){
    if(this.languagelist.length>=1)
         return
    $http({
      method:'GET',
      url:'http://127.0.0.1:5500/Json/language.json'
    }).then((res)=>{
      this.languagelist = res.data
    }

    )
    
  }
});