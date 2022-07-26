## 练习

- 简单的登录窗口，完成 login.png 图中的页面。

  - 文件夹命名：task-login
  - 颜色：#1890ff
  - 宽：340px 高：277px

-----
- 制作一个自己的简历【没有固定样式】

  - 文件夹命名：task-resume

-----
- 使用定位和边框等知识完成 position.png 页面

  - 利用 border 画一个三角形
  - header 和 footer 分别定为在顶部和尾部
  - 文件夹命名：task-position

-----
- 使用 Flex 布局完成下列练习，以下练习二选一（成年人不做选择，建议全都要）

  - 什么值得买列表页
  - 微信读书列表页

-----
- 使用 Grid 布局完成下列练习，以下练习二选一（成年人不做选择，建议全都要）

  - QQ 音乐首页
  - iconfont 首页

    - 颜色：#090723

-----
- 完成简化版的 `Dribbble` 首页，采用移动优先的方式，实现响应式设计，相关图标资源在 `task/imgs` 目录已有提供，效果图说明如下：

  - `task-375w.jpg`：此为页面宽度 `375px` 时的页面状态，顶部导航菜单折叠了起来，并且固定在顶部，内容区域采用单列布局。
  - `task-menu-375w.jpg`：此为折叠菜单展开时的状态，出现一个遮罩遮住整个页面
  - `task-768w.jpg`：此为页面宽度 `768px` 时的页面状态，导航菜单依旧是折叠的，下面的 banner 和内容区域变成了两列布局。
  - `task-920w.jpg`：此为页面宽度 `920px` 时的页面状态，导航菜单平铺，并且不再固定在顶部，下方内容依然是两列布局
  - `task-1024w.jpg`：此为页面宽度 `1024px` 时的页面状态，导航菜单平铺，并且不再固定在顶部，下方内容依然是三列布局
  - `task-1366w.jpg`：此为页面宽度 `1366px` 时的页面状态，banner 和下方列表占据全部的水平空间，两侧留有固定的内边距。
  - `task-1920w.jpg`：此为页面宽度 `1920px` 时的页面状态，banner 区域已经变成固定宽度，列表区域依然占据全部水平空间，两侧留有固定的内边距。
  - `task-hover.jpg`：平铺的导航菜单鼠标悬停时有改变颜色。

  **部分效果图中有标注一些颜色值和尺寸说明，只是作为开发参考，并非内容的一部分。**

  页面填充数据已通过 `task.json` 提供，字段说明如下

  - `cover`：封面图地址
  - `avatar`：作者头像地址
  - `name`：作者姓名
  - `badge`：名字后面的徽标，可能为空
  - `likes`：喜欢数
  - `views`：查看数

  > 要求

  - 自主完成，不得依赖外部框架或样式库
  - 合理使用新学习的媒体查询和 Grid 布局的高级用法
  - 布局应该尽可能做到像素级还原，尺寸、字号、对齐方式等等
  - 该任务主要是考察响应式布局，对于动画或者过渡效果，可自己酌情处理
  - 导航菜单在折叠状态下，点击菜单按钮切换展开（`task-menu-375w.jpg`）需要编写 `JavaScript` 脚本，这个效果需要自己研究并实现

-----
- 模仿[时间胶囊](http://p.timepill.net/)网页

  - 胶囊首页
  - 存胶囊页面
  - 取胶囊页面

  将数据存至 storage，格式可参考以下

  ```ts
  interface capsule {
    id: string
    name: string
    email: string
    time: number
    content: string
    tip: string
  }
  ```

  时间格式化可以使用[`moment`](http://momentjs.cn/)，通过 cdn 引入。使用方法如下

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
  ```

  ```js
  moment().format('YYYY-MM-DD HH:mm:ss')
  // 将当前时间格式化2021-06-21 15:40:01
  let tenMinsLate = new Date().getTime() + 600000
  moment(tenMinsLate).format('YYYY-MM-DD HH:mm:ss')
  // 将十分钟之后的时间格式化
  ```

  > 要求

  - 使用 ts

------
- 使用 React 改写上周的 demo`TodoList`

  > 要求

  - 使用 tsx

----
- 时间胶囊
  - 对接服务端
    - /api/add
    - /api/get
  - 使用 React 改写
    - 使用 react-router-dom
  - 使用 less 改写

## **作业要求：在每个作业中，加入一个 readme.md 的说明。**

说明这次练习的思路、遇到的问题以及如何解决问题。
