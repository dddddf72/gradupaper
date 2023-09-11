const { http } = require("./http")
function newMusic() {
    return http({ url: ":4000/related/playlist?id=1" })
}
function hotMusic() {
    return http({ url: ":4000/top/playlist/highquality" })
}
function dj() {
    return http({ url: ":4000/top/playlist?cat=华语" })
}
module.exports = { newMusic, hotMusic, dj }