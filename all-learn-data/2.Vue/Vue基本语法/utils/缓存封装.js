// 设置缓存
function setStorage(key, val) {
    if (val instanceof Array | typeof value == "Object") {
        localStorage.setItem(key, JSON.stringify(val))
    } else {
        localStorage.setItem(key, val)
    }
}

// 获取缓存
function getStorage(key) {
    var reg = /^[{\[].+[}\]]$/
    let val = localStorage.getItem(key);
    if (reg.test(val)) {
        return JSON.parse(val)
    } else {
        return val;
    }
    // 写正则 [],{}
}

