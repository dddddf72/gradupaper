// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {name:"html",id:1001},
      {name:"css",id:1002},
      {name:"javaScript",id:1003}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onConfirm(event){
   var value = event.detail.value;
   var arr = this.data.arr;
   arr.unshift({
     name:value,
     id:1004
   });
   this.setData({
     arr
   })
  }
})