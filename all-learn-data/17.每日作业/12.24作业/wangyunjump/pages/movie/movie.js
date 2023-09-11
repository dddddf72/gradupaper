// pages/movie/movie.js
const { httpfeng, changeNum } = require("../../models/http");
Page({
    data: {
        result: []
    },
    onLoad: function () {
        this.httphandle()

    },
    onReachBottom() {
        this.httphandle()
    },
    httphandle() {
        var offset = this.data.result.length;
        httpfeng({
            url: `?start=${offset}`,
            success: (res) => {
                let result = [...this.data.result, ...res.data.result]
                result.forEach(item => {
                    // item["raitingnum"] = item.raiting;
                    item["raitingstar"] = changeNum(item.raiting);
                    if (item.title.length > 5) {
                        return item.title = item.title.slice(0, 6) + "..."
                    }
                })
                this.setData({
                    result
                })

            }
        })
    },
    handleToggle(event) {
        let { id } = event.currentTarget.dataset;
        wx.navigateTo({
            url: `/pages/movie-detail/movie-detail?id=${id}`
        });
    }
})