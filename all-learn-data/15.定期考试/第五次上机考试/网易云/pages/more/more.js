// pages/more/more.js
const https = require("../../models/home")
Page({
    data: {
        result: ""
    },
    onLoad: function (options) {
        var { keyword, title } = options
        console.log(title)
        wx.setNavigationBarTitle({
            title: title
        });
        var http = https[keyword];
        http().then(res => {
            var result = res.data.playlists
            console.log(result)
            this.setData({
                result
            })
        })
    }
})