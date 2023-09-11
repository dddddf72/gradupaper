const { httpcat } = require("../../models/http")
Page({
    data: {
        playlists: []
    },
    onLoad: function () {
        this.gethttpdata();
    },
    onReachBottom() {
        this.gethttpdata();
    },
    gethttpdata() {
        httpcat({
            offset: this.data.playlists.length,
            success: res => {
                var playlists = [...this.data.playlists, ...res.data.playlists];
                this.setData({
                    playlists
                })
            }
        })
    },
    Toggle(event) {
        let { id } = event.currentTarget.dataset
        wx.navigateTo({
            url: `/pages/detail/detail?id=${id}`
        })
    }

})
