const { http } = require("../models/http")

//和首页相关的http请求
function hotMusic() {
    return http({
        url: ":4000/top/playlist/highquality"
    })
}

function newMusic() {
    return http({
        url: ":4000/related/playlist?id=1"
    })
}
function dj() {
    return http({
        url: ":4000/top/playlist?cat=华语"
    })
}

// http请求按照页面ui分类


module.exports = {
    hotMusic,
    newMusic,
    dj,
    http
}