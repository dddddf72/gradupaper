/* 设置缓存 */
function  setStorage(key,val){
    if(val instanceof Array || typeof val == "object"){
        localStorage.setItem(key,JSON.stringify(val));
    }else{
        localStorage.setItem(key,val)
    }
}
/* 获取缓存 */
function getStorage(key){
    let val = localStorage.getItem(key);
    var reg = /^[{\[].+[}\]]$/
    if(reg.test(val)){
        return JSON.parse(val);
    }else{
        return val;
    }
    /*  */
    /* 正则  [],{} */
}