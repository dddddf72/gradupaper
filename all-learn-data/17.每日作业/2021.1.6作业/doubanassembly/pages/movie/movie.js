// pages/movie/movie.js
const { getHttpmovie, handlestar } = require("../../models/http")
Page({

    data: {
        result: []
    },
    onLoad: async function () {
        var res = await getHttpmovie();
        console.log(res)
        var result = res.data.result;
        result.forEach(item => {
            item["ratingstar"] = handlestar(item.raiting);
            console.log(item.ratingstar)
        })
        this.setData({
            result
        })
    }

})