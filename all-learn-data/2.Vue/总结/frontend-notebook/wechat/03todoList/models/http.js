/* promise */
var baseUrl = "http://192.168.4.18"
function http({
    url
}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
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

module.exports = http;