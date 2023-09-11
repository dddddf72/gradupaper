const baseurl = "http://192.168.4.18";
function http({
    url,
    success
}){
    wx.request({
        url:baseurl+url,
        data:{},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
            success(res)
        }
    });
}
function handleNum(num){
    if(num>=100000000){
        return Math.floor(num/100000000)+"亿"
    }else if(num>10000){
        return Math.floor(num/10000)+"万"
    }
    return num;
}
function handleHttpCat({
    offset = 0,
    success
}){
   var url = `:3000/top/playlist?cat=华语&limit=15&offset=${offset}`;
    http({
        url,
        success:res=>{
            success(res)
        }
    })
}
function handleTime(value){
    if(value<10){
        return "0" +value;
    }
    return "" +value;
}
function handleDtime(value){
    var second = Math.floor(value/1000);
    var minute = handleTime(Math.floor(second/60));
    second = handleTime(second%60);
    var sum = minute + ":" + second;
    return sum;
}
function changeNum(num){
    let arr = [];
    for(let i = 0 ; i < 5 ; i ++){
        if(num>2){
            arr.push(2);
        }
        else if(num>0){
            arr.push(Number(num.toFixed(1)));
        }
        else{
            arr.push(0);
        }
        num = num - 2;
    }
    return arr;
    }

function getHttpCart({
    success
})
{
    http({
        url:":8000/cart",
        success:res=>{
            success(res)
        }
    })
}

module.exports = {
    handleHttpCat,
    handleDtime,
    handleNum,
    http,
    changeNum,
    getHttpCart
};