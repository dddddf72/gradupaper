const {http} = require("./http.js");
/* 和首页相关的http */
function inMovie(){
    return http({
        url:"/in_theaters"
    })
}

function comeMovie(){
    return http({
        url:"/coming_soon"
    })
}
function topMovie(){
    return http({
        url:"/top250"
    })
}

/* 按照页面去分类 */
module.exports = {
    inMovie,
    comeMovie,
    topMovie
}