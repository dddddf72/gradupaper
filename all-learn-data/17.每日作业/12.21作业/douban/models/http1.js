const baseUrl = "http://192.168.4.18:3000/"
function http({
    url,
    success
}){
    // const 常量：创建之后不能修改的量 例如：Π=3.14
    wx.request({
        url: baseUrl+url,
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
            success(res)
        },
    });
}
// 二次封装

function getHttpCat({
    offset = 0,  //传默认值
    success
}){
    http({
        url:`top/playlist?cat=华语&limit=15&offset=${offset}`,
        success:res=>{
            success(res)
        }
    })
}
module.exports = {getHttpCat}