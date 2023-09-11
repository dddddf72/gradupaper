// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        result: []
    },
    onLoad() {
        wx.request({
            url: 'http://localhost:4000/top/playlist?cat=华语',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                this.setData({
                    result: res.data.playlists
                })
            },
            fail: () => { },
            complete: () => { }
        });
    }
})
