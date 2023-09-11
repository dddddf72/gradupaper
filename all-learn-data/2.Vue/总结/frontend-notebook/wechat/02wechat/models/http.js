const baseUrl = "http://192.168.4.18";
function http({
    url,
    success
}){
    wx.request({
        url: baseUrl+url,
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
           success(res) 
        }
    });
}
/* 二次封装 */

function getHttpCat({
    offset=0,
    success
}){
   http({
       url:`:3000/top/playlist?cat=华语&limit=15&offset=${offset}`,
       success:res=>{
        success(res)
       }
   })
}
function getHttpCart({
    success
}){
    http({
        url:":8000/cart",
        success:res=>{
            success(res)
        }
    })
}
module.exports = {
    getHttpCat,
    getHttpCart
}