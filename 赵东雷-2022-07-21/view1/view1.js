'use strict';

angular.module('myApp.view1', ['ngRoute','myApp.Screen','myApp.Voice','myApp.Notice','myApp.Helper','myApp.Cell'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', function ($scope) {
    $scope.datalist = [{
        title: '屏幕',
        desc: '显示器，亮度，夜间模式，显示器配置文件',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Screen',
      },
      {
        title: '声音',
        desc: '音量级别、输出、输入、声音设备',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Voice',
      },
      {
        title: '通知',
        desc: '来自应用和系统的警报',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Notice',
      },
      {
        title: '专注助手',
        desc: '通知、自动规则',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Helper',
      },
      {
        title: '电源和电池',
        desc: '睡眠、电池使用情况、节电模式',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
        url:'#!/view1/Cell',
      },
      {
        title: '存储',
        desc: '存储空间、驱动器、配置规则',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '就近共享',
        desc: '可发现性、收到文件的位置',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '多任务处理',
        desc: '贴靠窗口、桌面、任务切换',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '激活',
        desc: '激活状态、订阅、产品密钥',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '疑难解答',
        desc: '建议的疑难解答、首选项和历史记录',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '恢复',
        desc: '重置、高级启动、返回',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '投影到此电脑',
        desc: '权限、配对PIN、可发现性',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '远程桌面',
        desc: '远程桌面用户，连接权限',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '剪贴板',
        desc: '剪切和复制历史记录、同步、清除',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
      {
        title: '系统信息',
        desc: '设备规格、重命名电脑、Windows规格',
        src: '/img/computer.png',
        enter: '/img/jinru.png',
      },
    ];
  });