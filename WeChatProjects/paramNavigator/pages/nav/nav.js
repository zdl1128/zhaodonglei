// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		paramsValue:'',
		navigatorVal:'',
		apiname:'',
		apiscore:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
	console.log(options.title)
	this.setData({
		navigatorVal:options.title,
		//api
		apiname:options.name,
		apiscore:options.score,
		
	})
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
    let that = this
        wx.getStorage({
          key:'id',
          success:function(res){
            // console.log(res)
             that.setData({
              paramsValue:res.data
             })
          }
		})
		

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
         		//清除缓存
		wx.removeStorage({
		  key: 'id',
		  success:function(res){
			  console.log('删除缓存')
		  }
		})
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