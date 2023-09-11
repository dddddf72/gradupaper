var baseUrl = "http://192.168.4.18:3000/"
function ajax({
    url,
    method="get",
    success
})
{
    var xhr = new XMLHttpRequest();
        xhr.open(method,url=baseUrl+url,true);
        xhr.send();
        xhr.onreadystatechange =function (){
            if(xhr.status == 200 && xhr.readyState == 4){
                var res = JSON.parse(xhr.responseText);
                success(res)
            }
        }
}

function httpBanner(callback){
    ajax({
        url:"banner",
        success:res=>{
           callback(res)
        }
    })
}

function httpList(callback){
    ajax({
        url:"top/playlist?cat=华语",
        success:res=>{
            callback(res);
        }
    })
}