// Vue.component('todo-item',{
//     props:['todo'],
//     template:'<li>{{todo.text}}</li>'
//  })
var app = new Vue({
    el:'#app',
    data:{
        seen:true
    }
})
app.seen = true;