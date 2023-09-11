const app = getApp()

Page({
    data: {
        playlists: []
    },
    onLoad() {
        wx.request({
            url:
                'http://localhost:4000/top/playlist?cat=华语',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                this.setData({
                    playlists: res.data.playlists
                })
            },
        });
    }
})
