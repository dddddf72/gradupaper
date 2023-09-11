// pages/home/home.js
const app = getApp();
Page({

    data: {
        city: ""
    },
    onLoad: function () {
        app.callback = () => {
            var city = wx.getStorageSync('locationCity')
            this.setData({
                city
            })
        }
    },
    onShow: function () {
        var city = app.globalData.currentCity;
        this.setData({
            city
        })
    },
    jumpcity() {
        wx.navigateTo({
            url: '/pages/city/city'
        });
    }

})