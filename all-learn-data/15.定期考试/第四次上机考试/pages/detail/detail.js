const { http } = require("../../models/http")
Page({
    data: {
        playlist: {}
    },
    onLoad: function (options) {
        let { id } = options;
        http({
            url: `playlist/detail?id=${id}`,
            success: res => {
                console.log(res.data.playlist)
                var playlist = res.data.playlist
                this.setData({
                    playlist
                })
            }
        })
    }
})