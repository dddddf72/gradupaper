function http({
    keyword,
    success
})
{
    var reqTask = wx.request({
        url: `http://192.168.4.18:3000/search?keywords=${keyword}&type=10`,
        data: {},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
            success(res)
        },
        fail: ()=>{},
        complete: ()=>{}
    });
}
module.exports = http;