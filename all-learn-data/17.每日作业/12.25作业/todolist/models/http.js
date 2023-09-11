// const baseurl = "http://192.168.4.18"
// function http({
//     url,
//     success
// })
// {
//     var reqTask = wx.request({
//         url: baseurl+url,
//         data: {},
//         header: {'content-type':'application/json'},
//         method: 'GET',
//         dataType: 'json',
//         responseType: 'text',
//         success: (res)=>{
//             success(res)
//         },
//         fail: ()=>{},
//         complete: ()=>{}
//     });
// }

// function gethttpcat({
//     success
// })
// {
//     http({
//     url:":8000/city",
//     success:res => {
//         success(res)
//     }
//     })
// }

// promise
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
                reject(err);
            },
            complete: () => { }
        });
    })
}
module.exports = { http }