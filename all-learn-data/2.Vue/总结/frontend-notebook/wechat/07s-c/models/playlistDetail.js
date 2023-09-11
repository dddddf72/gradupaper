/* 歌单详情的http请求 */
const http = require("./http");

function getPlaylistDetail(id){
    return http({
        url:`:3000/playlist/detail?id=${id}`
    })
}
function getMusicPlayDetail(id){
    return http({
        url:`:3000/song/url?id=${id}`
    })
}
module.exports = {
    getPlaylistDetail,
    getMusicPlayDetail
}
