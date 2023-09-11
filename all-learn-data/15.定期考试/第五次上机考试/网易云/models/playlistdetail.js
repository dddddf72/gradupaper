const { http } = require("./http")
function getplaylist(id) {
    return http({ url: `:4000/playlist/detail?id=${id}` })
}
function getplay(id) {
    return http({ url: `:4000/song/url?id=${id}` })
}
module.exports = { getplaylist, getplay }
