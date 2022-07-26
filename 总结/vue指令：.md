### vue指令：

- v-bind：将这个元素点的title属性和Vue实例的message保持一致。

  ```
  <div id="app-2">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
  ```

  ```html
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  })
  ```

- v-if(条件):将数据绑定到dom结构。
  ```html
  <div id="app-3">
    <p v-if="seen">现在你看到我了</p>
  </div>
  ```

  ```html
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })
  ```

- v-for(循环):绑定数组来渲染一个项目列表

  ```
  <div id="app-4">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
  ```

  ```
  var app4 = new Vue({
     el:'#app4',
     data:{
        todos:[
        {text:'学习vue'}
        {text：'听歌'}
        ]
  }
  })
  ```

- v-on（可以处理用户输入）：用`v-on`指令添加一个事件监听器，通过它调用在Vue实例中定义的方法,在reverseMessage方法中，我们更新了应用状态，但是没有触碰dom，dom由vue处理。

  ```
  <div id="app5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转消息</button>
  </div>
  ```

  ```
  var app5 = new Vue({
   el:'#app5',
   data:{
     message:'hello vue.js'
     methods:{
        reverseMessage:function(){
             this.message = this.message.spilt('').reverse().join('')
        }
     }
   }
  })
  ```

  