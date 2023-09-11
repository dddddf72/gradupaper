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