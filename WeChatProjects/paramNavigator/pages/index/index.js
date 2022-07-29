// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

	},
	

	//api传值
	wxapi(){
    wx.navigateTo({
			url: '/pages/nav/nav?score='+90+"&name="+'mary',
		})
	}
,
  //缓存带参跳转
  storage(){
       //设置缓存
       wx.setStorage({
         key:'id',
         data:'101',
       })
      //  跳转
      wx.navigateTo({
        url: '/pages/nav/nav',
      })
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