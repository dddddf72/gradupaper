var baseurl = "http://192.168.4.246"
function http({
    url
}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseurl + url,
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}
module.exports = { http }