const { getCatHttp } = require("../../models/http")

Page({
    data: {
        playlists: []
    },
    onLoad: async function () {
        var res = await getCatHttp();
        console.log(res)
        var playlists = res.data.playlists
        this.setData({
            playlists
        })
    },
    handleDelete(event) {
        console.log(event.detail)
        var id = event.detail
        var playlists = this.data.playlists
        var res = playlists.filter(item => item.id != id)
        this.setData({
            playlists: res
        })
    }
})
