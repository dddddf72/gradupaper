var baseurl = "http://192.168.4.20"
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

function nowplayhttp() {
    let url = ":8000/in_theaters"
    return http({ url })
}

function wcominghttp() {
    let url = ":8000/coming_soon"
    return http({ url })
}

function toptfzhttp() {
    let url = ":8000/top250"
    return http({ url })
}
module.exports = { nowplayhttp, wcominghttp, toptfzhttp }