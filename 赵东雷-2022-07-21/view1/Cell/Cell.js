"use strict";
angular
  .module("myApp.Cell", ["ngRoute"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/Cell", {
        templateUrl: "view1/Cell/Cell.html",
        controller: "Cell",
      });
    },
  ])
  .controller("Cell", function ($scope) {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;
    let category = [];
    let date = new Date().getHours();
    for (let i = 1; i <= 24; i++) {
      if (i % 6 == 1) {
        let temp = date + 6 * Math.floor(i / 6);
        if (temp > 24) {
          temp -= 24;
        }
        category.push(temp+':00')
      } else {
        category.push("")
      }
    }
    category.push(date + ":00");
    console.log(category);
    option = {
      title: {
        text: "电池电量",
      },
      xAxis: {
        type: "category",
        data: category,
        textStyle: {
          align: "left",
        },
        splitNumber: 5,
      },
      yAxis: {
        type: "value",
        scale: Boolean,
        data: ["50%", "100"],
        axisLabel: {
          margin: 15,
          // font- size: 12;
        },
        splitNumber: 2,
      },
      series: [
        {
          data: [100, 100, 100, 80, 70, 10, 20, 30, 40, 100, 80, 100, 50, 60, 70,100, 100, 100, 100, 80, 70, 10, 100, 100],
          type: "bar",
          showBackground: false,
          backgroundStyle: {
            color: "white",
          },
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#43eec6" },
              { offset: 1, color: "#14c8d4" },
            ]),
          },
        },
      ],
    };

    option && myChart.setOption(option);

    $scope.celllist = [
        {
          title: "屏幕和睡眠",
          src: "./img/computer.png",
        },
        {
            title: "电源模式",
            desc: "根据电源使用情况和性能来优化你的设备",
            src: "./img/computer.png",
          },
    ]
    $scope.celluselist = [
        {
            title: "节电模式",
            desc: "通过限制一些通知和后台活动延长电池寿命",
            src: "./img/computer.png",
          },
          {
            title: "电池使用情况",
            src: "./img/computer.png",
          },
    ]
  })