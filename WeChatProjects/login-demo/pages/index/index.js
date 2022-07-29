// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //获取用户信息
  getAppid() {
    const accountInfo = wx.getAccountInfoSync()
    console.log(accountInfo.miniProgram.appId);
  },
  getUserInfo() {

    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: function (res) {
        let user = {
          userInfo: res.userInfo,
        }
        console.log(user)
      }
    })
  },
  //业务代码
  getCompInfo() {
    const self = this;
    //从缓存中获取用户登录状态
    wx.getStorage({
      key: 'wxUserInfo',
      success: (res) => {
        //验证登录状态
        wx.checkSession({
          success() {
            self.send(
              'api', {
                openid: openid
              },
              () => {}
            );
          },
          fail() {
            //重新登录
            this.login();
          }
        })

      }
    })
  },
  login() {
    wx.login({
      success(res) {
        console.log('获取code', res)
        //向服务器发送请求
        //url路径需要在微信公众平台的开发设置中进行配置
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session', //web服务器接口地址
          data: {
            js_code: res.code,
            appid: 'wx2aeae3b070700ff1',
            secret: '3f3afdef54cd9f934e48cd58876c6c7f',
            grant_type: 'authorization_code'
          },
          success(res) {
            console.log('success', res)
            let openid = res.data.openid
            let session_key = res.data.session_key
            //存储storage
            wx.setStorage({
              key: 'wxUserInfo',
              data: {
                openid: openid, //openid(缩写)
                session_key: session_key //session_key（缩写）
              }
            })
          },
          fail(res) {
            console.log('fail', res)
          },
          complete(res) {
            console.log('complete', res)
          }
        })
      }
    })
  },
  send(url, data, callback) {
    //向服务器发送请求获取数据
    wx.request({
      url: url,
      data: data,
      success(res) {
        //业务处理服务器数据
        callback(res)
        //把list渲染到页面
      }
    })
  },
  // 登录操作
  wxlogin() {
    this.login();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})