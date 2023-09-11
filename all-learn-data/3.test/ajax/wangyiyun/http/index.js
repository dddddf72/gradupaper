var baseUrl = "http://192.168.4.18:3000/"
function  ajax({
    url,
    method = "get",
    success
})
{
    var xhr = new XMLHttpRequest()
        xhr.open(method,url=baseUrl+url,true)
        xhr.send();
        xhr.onreadystatechange = function(){
            if(  xhr.readyState == 4 && xhr.status == 200){
                var res = JSON.parse(xhr.responseText);
                success(res);
            }
        }
}

function httpAlbum(callback){
    ajax({
        url:"top/playlist/?cat=华语",
        success:res=>{
            callback(res)
        }
    })
}

function handleData(res){
    var arr = res.playlists.slice(0,6);
    console.log(arr)
    arr.forEach(item=>{
        item.name = item.name.slice(0,8)+"...";
        item.description = item.description.slice(0,26)+"...";
        var template = 
        `
            <a href = "html/detail.html?id=${item.id}">
            <div class="container">
            <img src=${item.coverImgUrl} alt="">
            <p class="title">${item.name}</p>
            <br>
            <p class="name">${item.description}</p>
            </div>
            </a>
        `
        $("#app").append(template)
    })
}

