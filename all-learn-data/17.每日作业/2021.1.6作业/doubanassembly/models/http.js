const baseurl = "http://192.168.4.18:8000"
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

function getHttpmovie() {
    return http({
        url: "/"
    })
}

function getHttpbook() {
    return http({
        url: "/book"
    })
}

function handlestar(value) {
    value = Number(value)
    var arr = []
    for (var i = 0; i < 5; i++) {
        if (value > 2) {
            arr.push(2)
        }
        else if (value > 1) {
            arr.push(Number(value.toFixed(1)))
        }
        else {
            arr.push(0)
        }
        value = value - 2;
    }
    return arr;
}
module.exports = { getHttpmovie, getHttpbook, handlestar }