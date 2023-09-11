var {apikey} = require("./utils/config")
App({
    /* 可以将共用的数据放在App.js中 */
    globalData: {
        currentCity: ""
    },
    onLaunch: function () {
        wx.getLocation({
            type: 'wgs84',
            success: (res)=>{
                var {latitude,longitude} = res;
                console.log(latitude);
                console.log(longitude)
                var url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${apikey}&get_poi=1`;
                wx.request({
                    url,
                    header: {'content-type':'application/json'},
                    method: 'GET',
                    dataType: 'json',
                    responseType: 'text',
                    success: (res)=>{
                        var city = res.data.result.address_component.city;
                        wx.setStorageSync('locationCity', city);
                        this.globalData.currentCity = city;
                        console.log(this)
                    }
                });
            }
        });
    }
});