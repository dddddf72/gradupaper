function http({
    offset=0,
    success
}){
    var url =`http://192.168.4.18:3000/top/playlist?cat=华语&limit=20&offset=${offset}`
    $.ajax({
        url,
        success:res=>{
            success(res)
        }
    })
}