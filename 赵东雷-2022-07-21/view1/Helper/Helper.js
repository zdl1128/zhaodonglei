"use strict";
angular
  .module("myApp.Helper", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/Helper", {
        templateUrl: "view1/Helper/Helper.html",
        controller: "Helper",
      });
    },
  ])
  .controller("Helper", function ($scope) {
    $scope.helplist = [
      {
        title: "专注助手",
        desc: "要保持专注，请选择希望查看和收听的通知,其他通知将直接转到通知中心，可在那里随时查看",
        src: "./img/computer.png",
      },
    ];

    $scope.outHide = "false";
    $scope.changeHide = function () {
      $scope.outHide = !$scope.outHide;
    };
    $scope.autolist = [
      {
        title: "在这些时间段内",
        desc: "23:00-7:00；仅优先通知",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
      {
        title: "当我投影屏幕时",
        desc: "仅限闹钟",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
      {
        title: "当我玩游戏时",
        desc: "仅优先通知",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
      {
        title: "在全屏模式下仅使用应用时",
        desc: "仅限闹钟",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
      {
        title: "Windows功能更新后的第一小时",
        desc: "仅优先通知",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
    ];
    
  });
