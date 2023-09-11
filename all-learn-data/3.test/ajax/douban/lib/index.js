var baseurl = "http://192.168.4.244:4000"
function ajax({
    method="get",
    url,
    success
})
{
    var xhr = new XMLHttpRequest();
        xhr.open(method,url=baseurl+url,true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.status ==200 && xhr.readyState==4){
                var res = JSON.parse(xhr.responseText);
                success(res)
            }
        }
    }
    function httpAlbum(callback){
        ajax({
            url:"",
            success:res=>{
                callback(res)
            }
        })
    }

    function handleData(res){
        var arr = res.result.slice(0,6);
        console.log(arr)
        arr.forEach((item,index)=>{
            var template = 
            `   
                <div class="left">
                <span>${index+1}</span>
                <img src=${item.pic} alt="">
                <div class="content">
                <p class="title">${item.title}</p>
                <p class="jianjie">${item.jianjie}</p>
                <p class="raiting">${item.raiting} ${item.comment}</p>
                <p class="slogo">${item.slogo}</p>
                </div>
                </div>
            `
            $("#app").append(template)
        })
    }

    httpAlbum(handleData);