'use strict';

angular.module('myApp.Language-And-area',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7/Language-And-area', {
    templateUrl: 'view7/Language-And-area/Language-And-area.html',
    controller: 'Language'
  });
}])


.controller('Language', function($scope,$http) {
  $scope.languagelist=[]
  $scope.countrylist=[]
  $scope.regionlist=[]
  $scope.selected='1'

  $http({
    method:'GET',
    url:'http://127.0.0.1:5500/Json/language.json'
  }).then((res)=>{
    console.log(res.data)
    $scope.languagelist = res.data
  }

  )
  $http({
    method:'GET',
    url:'http://127.0.0.1:5500/Json/country.json'
  }).then((res)=>{
    $scope.countrylist = res.data
  }
  )

  $http({
    method:'GET',
    url:'http://127.0.0.1:5500/Json/region.json'
  }).then((res)=>{
    console.log(res.data)
    $scope.regionlist = res.data
  }
  
  )

})
.controller('dropdownCtrl',function($scope){
  $scope.myhide = true;
  $scope.hidetoggle = function () {
    $scope.myhide = !$scope.myhide;
    };
}
 
)
