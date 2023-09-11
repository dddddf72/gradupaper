var baseUrl = "http://192.168.4.18"
function http({
    url
}){
    return new Promise((resolve,reject)=>{
       wx.request({
            url: baseUrl +url,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result)
            },
            fail: (err)=>{
                reject(err);
            }
        });
    })
}

function getCatHttp(){
    return http({
        url:":3000/top/playlist?cat=华语"
    })
}

function getHomeHttp(){
    return http({
        url:":3000/program/recommend"
    })
}
module.exports = {
    getCatHttp,
    getHomeHttp
}