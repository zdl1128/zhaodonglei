"use strict";
angular
  .module("myApp.Screen", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/Screen", {
        templateUrl: "view1/Screen/Screen.html",
        controller: "Screen",
      });
    },
  ])
  .controller("Screen", function ($scope) {
    $scope.colorlist = [{
        title: "夜间模式",
        desc: "使用较暖的颜色帮助屏蔽蓝光",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
      {
        title: "HDR",
        desc: "有关HDR的详细信息",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
    ];
    $scope.layoutlist = [{
        title: "缩放",
        desc: "更改文本，应用和其他项目的大小",
        src: "./img/computer.png",
        enter: "/img/jinru.png",
        url: "#!/view1/Screen",
      },
      {
        title: "显示器分辨率",
        desc: "调整分辨率以结合所连接的显示器",
        src: "./img/computer.png",
      },
      {
        title: "显示方向",
        src: "./img/computer.png",
      },
      {
        title: "多显示器",
        desc: "选择显示器的呈现模式",
        src: "./img/computer.png",
      },
    ];
    $scope.setuplist = [{
      title: "夜间模式",
      desc: "使用较暖的颜色帮助屏蔽蓝光",
      src: "./img/computer.png",
      enter: "/img/jinru.png",
      url: "#!/view1/Screen",
    },
    {
      title: "HDR",
      desc: "有关HDR的详细信息",
      src: "./img/computer.png",
      enter: "/img/jinru.png",
      url: "#!/view1/Screen",
    },
  ];
  });