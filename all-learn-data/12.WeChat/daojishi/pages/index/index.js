// index.js
// 获取应用实例
const app = getApp()

Page({

  data: {
    result: ""
  },
  onLoad() {
    this.oncounttime();
  },

  oncounttime: function () {

    setTimeout(() => {
      num--;
      if (num >= 0) {
        console.log(num)
        this.oncounttime();
        this.setData({
          result: num
        })
      }
    }, 1000);
  }
})
