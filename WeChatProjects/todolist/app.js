// app.js
App({

onLaunch(){
  let that = this
  wx.getStorage({
    key:'wxuserinfo',
    success(res){
      console.log('成功读取缓存',res)
       wx.checkSession({
         success(res){
           console.log('验证登录成功后，请求数据',res)
         },
         fail(res){
           console.log('登录失效',res)
          that.login()
         }
       })
    },
    fail(res){
      console.log('读取缓存失败',res)
     that.login()
    },
 
    
  })
 
},
login(){
  wx.login({
    success(res){
         console.log('获取code',res)
         //向服务器发送请求，将code发送
         wx.request({
           url:'https://api.weixin.qq.com/sns/jscode2session',
           data:{
              js_code:res.code,
              appid:'wx2aeae3b070700ff1',
              secret:'3f3afdef54cd9f934e48cd58876c6c7f',
              grant_type: 'authorization_code'
           },
           success(res){
             console.log("成功",res)
             let openid = res.data.openid
             let session_key = res.data.session_key
             wx.setStorage({
               key:'wxuserinfo',
               data:{
                 openid:openid,
                 session_key:session_key
               }
             })
           },
           fail(res){
                 console.log('失败',res)
           },
           complete(res){
             console.log('完成',res.errMsg)
           }
         })
    }
  })
}
})
