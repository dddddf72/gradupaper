//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    city:""
  },
  onLoad(){
     app.callback=()=>{
      console.log("onLoad")
      var  city = wx.getStorageSync('locationCity');
      this.setData({
        city
      })
     }
  }
})
