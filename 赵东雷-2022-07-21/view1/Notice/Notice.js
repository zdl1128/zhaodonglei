"use strict";
angular
  .module("myApp.Notice", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/Notice", {
        templateUrl: "view1/Notice/Notice.html",
        controller: "Notice",
      });
    },
  ])
  .controller("Notice", function ($scope) {
    $scope.noticelist = [
      {
        title: "通知",
        desc: "获取来自应用和其他发送者的通知",
        src: "./img/computer.png",
      },
      {
        title: "专注助手",
        desc: "控制获取或不获取通知的时间",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
    ];
    $scope.applist = [
        {
            title: '节电模式',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: '设置',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: 'Windows Hello',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: '联想语音助手',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: '音频',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: '反馈中心',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: 'OneDrive',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },
        {
            title: 'Microsoft Store',
            desc: '横幅、声音',
            src: './img/computer.png',
            enter: '/img/jinru.png',
            url:'#!/view1/Screen',
        },


    ]
  });
