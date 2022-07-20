"use strict";
angular
  .module("myApp.Voice", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/Voice", {
        templateUrl: "view1/Voice/Voice.html",
        controller: "Voice",
      });
    },
  ])
  .controller("Voice", function ($scope){
    $scope.voice0 = 1
    // $scope.outHide = "true"
    // $scope.changeHide=function(){
    //   console.log($scope)
    //   console.log(this)
    //   $scope.outHide = !outHide;
    // }
    $scope.outlist = [{
        title: "选择播放声音的位置",
        desc: "应用可能有自己的设置",
        src: "./img/computer.png",
      },
      {
        title: "音量",
      },
      {
        title: '单声道音频',
        desc: '将左声道和右声道合并成一个声道',
      },
    ];
    $scope.hidelist = [{
      title: "扬声器",
      desc: "Realtek(R) Audio",
      enter: '/img/jinru.png',
      url:'#!/view1/Screen',
    },
    {
      title: "配对新的输出设备",
    },
  ];
    $scope.enterlist = [{
        title: '选择用于讲话或录制的设备',
        desc: '应用可能有自己的设置',
        src: './img/computer.png',
      },
      {
        title: "音量",
      },
    ];
    $scope.highlist = [{
        title: '排查常见声音问题',
       
      },
      {
        title: '所有声音设备',
        desc: '开启/关闭设备、排除故障、其他选项',
        src: './img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Screen',
      },
      {
        title: '音量合成器',
        desc: '应用程序音量混合，应用程序输入和输出设备',
        src: './img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Screen',
      },
      {
        title: '更多声音设置',
        src: './img/computer.png',
        // enter: '/img/jinru.png',
        // url:'#!/view1/Screen',
      },
    ]
  })
  .controller("Out", function ($scope){
    $scope.outHide = "false"
    $scope.changeHide=function(){
      $scope.outHide = !$scope.outHide;
    }
    })