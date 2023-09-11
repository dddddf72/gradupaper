function http({
    keyword,
    success
})
{
    var reqTask = wx.request({
        url: `http://192.168.4.18:8000/${keyword}`,
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