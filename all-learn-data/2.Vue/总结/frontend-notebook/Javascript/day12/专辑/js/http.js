var baseUrl = "http://192.168.4.18:3000/"
function ajax({
    url,
    method="get",
    success
}){
    var xhr = new XMLHttpRequest()
    xhr.open(method,url=baseUrl+url,true)
    xhr.send()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var res = JSON.parse(xhr.responseText)
            success(res)
        }
    }
}

function httpAlbum(callback){
    ajax({
        url:"top/album",
        success:res =>{
            callback(res)
        }
    })
}
function handleData(res){
    
    var arr = res.albums
        // console.log(arr);
        arr.forEach(item =>{
            var template = `
        <a href = "html/detail.html?id=${item.id}">
           <div class="container" data-aid="${item.id}">
           <img src=${item.blurPicUrl} alt="">
           <p class="title">${item.name}</p>
           <p class="name">${item.artist.name}</p>
           </div>
       </a>
           
            `
            $("#app").append(template)
        })
}