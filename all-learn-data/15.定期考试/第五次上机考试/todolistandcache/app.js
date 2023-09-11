// app.js
App({
  globalData: {
    currentCity: ""
  },
  onLaunch: function () {
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (res) => {
        let { latitude, longitude } = res;
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=V7DBZ-ZKGWR-QU6W7-W4YAM-A3DDZ-PBFTL&get_poi=1`,
          data: {},
          header: { 'content-type': 'application/json' },
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (res) => {
            if (this.callback) {
              var city = res.data.result.address_component.city;
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
