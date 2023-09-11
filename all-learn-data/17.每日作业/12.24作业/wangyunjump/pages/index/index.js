const { handleHttpCat, handleNum } = require("../../models/http")

Page({
    data: {
        playlists: []
    },
    onLoad: function (options) {
        this.getHttpData();
    },
    onReachBottom() {
        this.getHttpData();
    },
    getHttpData() {
        handleHttpCat({
            offset: this.data.playlists.length,
            success: res => {
                let playlists = [...this.data.playlists, ...res.data.playlists]

                playlists.forEach(item => {
                    item.playCount = handleNum(item.playCount);
                })
                this.setData({
                    playlists
                })
            }
        })
    },
    handleToggle(event) {
        let id = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/detail/detail?id=${id}`
        });
    }
})
