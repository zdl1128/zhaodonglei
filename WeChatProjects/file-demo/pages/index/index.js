// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

//打开文档
openDocument(){
    //需要先下载文档
    wx.downloadFile({
      url: 'http://127.0.0.1:5500/阶段总结报告-姜煜6月13日~6月24日.docx', //在线文档地址（docx,xls,ppt,pdf）
      success(res){
         const filePath = res.tempFilePath
         wx.openDocument({
           filePath: filePath,
           success(res){
            console.log('文件已经打开')
         }
           
         })
      }
    })
},


//清除本地缓存文件
removeSavedFileList(){
  let FileSystemManager = wx.getFileSystemManager()
  FileSystemManager.getSavedFileList({
       success(res){
            console.log(res)
            //删除
            if(res.fileList.length>0){
              for(let i = 0;i<res.fileList.length;i++){
                wx.removeSavedFile({
                  filePath: res.fileList[i].filePath,
                  success(res){
                    console.log('[成功]',res)
                  },
                  fail(res){
                    console.log('[失败]',res)
                  },
                  complete(res){
                    console.log('[完成]',res)
                  }
                })
              }
            }
            FileSystemManager.rem
       }
     })
},


 // 获取该小程序下已保存的本地缓存文件列表
 getSavedFileList(){
 let FileSystemManager = wx.getFileSystemManager()
  // console.log(FileSystemManager);
  FileSystemManager.getSavedFileList({
     success(res){
       console.log(res.fileList)
     }
   })
 },

// 获取本地临时缓存文件信息
getFileInfo(){
  let FileSystemManager = wx.getFileSystemManager()
  wx.chooseImage({
    success(res){
      FileSystemManager.getFileInfo({
        filePath:res.tempFilePaths[0],  //要读取的文件路径 (本地路径)
        //size以字节为单位
        //digest计算算法  md5/sha1之后的一个值。默认md5
        success(res){
          console.log(res)
        }
      })
    }
  })
    
},

  //文件保存
  //保存文件至本地，会移动临时文件，保存后临时文件不可用
saveFile(){
     wx.chooseImage({
       success(res){
         const tempFilePaths = res.tempFilePaths
         console.log(tempFilePaths)
         //保存
         let FileSystemManager = wx.getFileSystemManager()
         FileSystemManager.saveFile({
           tempFilePath: tempFilePaths[0], //需要保存的文件的临时路径 (本地路径)
           success(res){
             const savedFilePath = res.savedFilePath   //存储后的文件路径 (本地路径)
             console.log(savedFilePath)
             //图片存储后的路径
              //windows:C:\Users\Administrator\AppData\Local\微信开发者工具\User Data
              //搜索文件名
           }
         })
         //保存至相册
        //  wx.saveImageToPhotosAlbum({
        //    filePath: tempFilePaths[0],
        //    success(res){
        //     const savedFilePath = res.savedFilePath
        //     console.log(savedFilePath)
        //    }
        //  })

        // //保存至视频目录
        // wx.saveVideoToPhotosAlbum({
        //   filePath: 'tempFilePaths[0]',  //视频文件的临时路径
        //   success(res){
        //     wx.showToast({
        //       title: '保存成功',
        //     })
        //   }
        // })
       }
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