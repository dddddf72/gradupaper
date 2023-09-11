// pages/movie/movie.js
const {handleTitle,transfromStar} = require("../../utils/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    banners:[],
    swiperParams:{
      defaultColor:"#fff",
      dots:true,
      activeColor:"#ff2d51",
      autoplay:true,
      circular:true
    }
  },
  onLoad: function () {
    /* 你们代码要封装http请求 */
    wx.request({
      url: 'http://192.168.4.18:8000/',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
         this.handleHttpData(result.data.result)
      }
    });
    wx.request({
      url: 'http://192.168.4.18:8000/banner',
      method: 'GET', 
      success: (res)=>{
        this.setData({
          banners:res.data
        })
      }
    })
  },
  handleHttpData(res){
    this.setData({
      movies:res
    })
  }
})