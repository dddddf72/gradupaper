const { http } = require("./home")

function getPlaylistDetail(id) {
    return http({
        url: `:4000/playlist/detail?id=${id}`
    })
}

function getMusicPlay(id) {
    return http({
        url: `:4000/song/url?id=${id}`
    })
}

module.exports = { getPlaylistDetail, getMusicPlay }