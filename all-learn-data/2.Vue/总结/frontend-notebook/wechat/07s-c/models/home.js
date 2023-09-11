const http = require("./http");
/* 和首页相关的http请求 */
function hotMusic(){
    return http({
        url:":3000/top/playlist/highquality"
    })
}

function newMusic(){
    return http({
        url:":3000/related/playlist?id=1"
    })
}
function dj(){
    return http({
        url:":3000/top/playlist?cat=华语"
    })
}


/* 按照页面去分类 */

module.exports = {
    hotMusic,
    newMusic,
    dj
}