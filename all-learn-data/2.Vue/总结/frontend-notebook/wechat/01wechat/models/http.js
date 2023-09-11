function http({
    keyword,
    success
}){
    wx.request({
        url: `http://192.168.4.18:3000/search?keywords=${keyword}&type=10`,
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
            success(res)
        }
    });
}
/* 小程序中使用node.js的模块化方案 */
module.exports =http;