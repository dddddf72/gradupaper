function http(url){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:`http://192.168.4.18:3000/${url}`,
            type:"get",
            success:res=>{
                resolve(res)
            },
            error:err=>{
                reject(err)
            }
        })
    })
}
/* 
jquery-ajax
下午作业:使用promise,async,await改造网易云首页
/banner
cat=华语
 */