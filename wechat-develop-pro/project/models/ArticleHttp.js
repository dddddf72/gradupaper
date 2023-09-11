const Http = require('./Http')
class ArticleHttp extends Http {
    static getlist() {
        return ArticleHttp.request({
            url: '/api/article'
        })
    }
    static getDetail(id) {
        return ArticleHttp.request({
            url: `/api/articleDetail?id=${id}`
        })
    }
    //id,cllected文章收藏的状态
    static setCollect({ id, collected }) {
        return ArticleHttp.request({
            url: '/api/doCollect',
            method: 'post',
            data: {
                id, collected
            }
        })
    }
}
module.exports = ArticleHttp
//