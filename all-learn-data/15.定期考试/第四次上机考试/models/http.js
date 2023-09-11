const baseurl = "http://192.168.4.18:3000/";
function http({
    url,
    success
}) {
    wx.request({
        url: baseurl + url,
        data: {},
        header: { 'content-type': 'application/json' },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res) => {
            success(res)
        },
        fail: () => { },
        complete: () => { }
    });
}

function httpcat({
    offset = 0,
    success
}) {
    var url = `top/playlist?cat=华语&limit=15&offset=${offset}`
    http({
        url: url,
        success: res => {
            success(res)
        }
    })
}

function http1({
    keyword,
    success
}) {
    wx.request({
        url: `http://192.168.4.18:3000/search?keywords=${keyword}&type=10`,
        data: {},
        header: { 'content-type': 'application/json' },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res) => {
            success(res)
        },
        fail: () => { },
        complete: () => { }
    });
}

function httpcart({
    success
}) {
    wx.request({
        url: 'http://192.168.4.18:8000/cart',
        data: {},
        header: { 'content-type': 'application/json' },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res) => {
            success(res)
        },
        fail: () => { },
        complete: () => { }
    });
}
module.exports = { http, httpcat, http1, httpcart }