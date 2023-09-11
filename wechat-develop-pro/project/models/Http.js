const baseurl = 'http://47.119.132.191:4000'
class Http {
    static request({
        url, data, method = 'get'
    }) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: baseurl + url,
                data,
                method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                // header: {}, // 设置请求的 header
                success: (res) => {
                    this.handleStatusCode(res, resolve)
                },
                fail: (res) => {
                    this.handleStatusCode(res, reject)
                }
            })
        })
    }
    static handleStatusCode(res, params) {
        if (res.statusCode) {
            if (res.statusCode == 200 && res.data.code == 200) {
                params(res)
            } else {
                wx.showToast({
                    title: '网络异常',
                    icon: 'error'
                });
                throw new Error('传参异常')
            }
        } else {
            params(res)
            wx.showToast({
                title: '无法连接网络',
                icon: 'error'
            });
            throw new Error('网络异常')
        }
    }
}
module.exports = Http;