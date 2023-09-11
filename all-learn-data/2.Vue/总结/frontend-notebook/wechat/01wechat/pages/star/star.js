// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     rating:9.5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var num = this.data.rating;
     /* 调用另一个函数:需要加this关键字 */
     var stars =this.transformStar(num);
     console.log(stars)
     this.setData({
       rating:stars
     })
  },
  transformStar(num){
    let arr = [];
    for(let i=0;i<5;i++){
      if(num>2){
        arr.push(2)
      }else if(num>0){
        arr.push(num)
      }else{
        arr.push(0)
      }
      num=num-2
    }
    return arr;
  }
})