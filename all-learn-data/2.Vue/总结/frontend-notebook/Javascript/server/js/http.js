/* 解构,回调函数 
需要背诵
*/
function ajax({
    url,
    method,
    success
}){
    var xhr =  new XMLHttpRequest()
        xhr.open(method,url,true)
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var res = JSON.parse(xhr.responseText);
                success(res);
            }
        }
}
/* 学习jquery-ajax */