const Http = require('./Http')
class UserHttp extends Http {
    static getCollectMovie() {
        return this.request({
            url: '/api/getCollect'
        })
    }
    static getHistoryMovie() {
        return this.request({
            url: '/api/getHistory'
        })
    }
    static getUserInfo() {
        return this.request({
            url: '/api/user'
        })
    }
}
module.exports = UserHttp