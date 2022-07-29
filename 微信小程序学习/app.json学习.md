

## app.json配置（wx_demo）

- ```
    "window":{
      "backgroundTextStyle":"dark",      //刷新的loading点的变化效果
      "navigationBarBackgroundColor": "#fff",  //改变头部背景色
      "navigationBarTitleText": "Weixin",  //改变头部文本
      "navigationBarTextStyle":"black",  //改变文本颜色
      "enablePullDownRefresh": true,   //添加下拉刷新功能
      "backgroundColor": "#ddd"  //12行下拉刷新背景呈现颜色
    },  
  ```

- ```
   "sitemapLocation": "sitemap.json",  //用来配置小程序及其页面是否允许被微信索引
  ```

- ```
    "tabBar": {
      "list": [{
        "pagePath": "pagePath",
        "text": "text",
        "iconPath": "iconPath",      
        "selectedIconPath": "selectedIconPath"     
      }]
    }
  ```

- ```html
  //触摸栏的list最多5项，最少两项
  "tabBar": {
    "selectedColor": "#f00",  //选中的文字颜色
    "borderStyle": "black",      //上边框颜色，区分触摸栏和屏幕，将他们分开
    "list": [
      {
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "/images/icon_API.png",
      "selectedIconPath": "/images/icon_API_HL.png"
    },
    {
      "pagePath": "pages/logs/logs",   //跳转页面路径
      "text": "日志",
      "iconPath": "/images/icon_cloud.png",   //未选中图标（灰色）
      "selectedIconPath": "/images/icon_cloud_HL.png"  //选中图标（绿色）
    }
  
  ]
  }
  ```

- 当把链接设置在触摸栏上，原有的跳转方式的链接将会失效，因为跳转机制不同。