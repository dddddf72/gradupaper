//app.js
// 将公用的数据放在app.js中
var { apikey } = require("./utils/config")
App({
  globalData: {
    currentCity: ""
  }
  ,
  onLaunch: function () {
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (res) => {
        console.log(res)
        var { latitude, longitude } = res;
        console.log(latitude)
        console.log(longitude)
        var url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${apikey}&get_poi=1`
        wx.request({
          url,
          data: {},
          header: { 'content-type': 'application/json' },
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (res) => {
            console.log(res.data)
            var city = res.data.result.address_component.city;
            if (this.callback) {
              wx.setStorageSync('locationCity', city)
              this.globalData.currentCity = city;
              this.callback();
            }

          }
        });
      }
    });
  }
})
