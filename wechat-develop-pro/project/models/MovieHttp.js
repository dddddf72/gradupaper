const Http = require('./Http')
class MovieHttp extends Http {
    // top250|comingSoon|inTheaters
    static getMovie(m) {
        return MovieHttp.request({
            url: `/api/movie/${m}`
        })
    }
    static setCollect({
        id,
        m,
        collected
    }) {
        return MovieHttp.request({
            url: `/api/collectMovie/${m}`,
            data: {
                id, collected
            },
            method: 'post'
        })
    }
    static addHistory({ id, m }) {
        return MovieHttp.request({
            url: `/api/history?id=${id}&m=${m}`
        })
    }
    static getSearch(keyword) {
        return this.request({
            url: `/api/search?keyword=${keyword}`
        })
    }
    static getDetail(id) {
        return this.request({
            url: `/api/movieDetail?id=${id}`
        })
    }
}
module.exports = MovieHttp