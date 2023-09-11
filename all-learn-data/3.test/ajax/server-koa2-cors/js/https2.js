function ajax({
    url,
    method,
    success
})
{
    var xhr = new XMLHttpRequest();
        xhr.open(method,url,true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.status ==200 && xhr.readyState == 4 ){
                var res =JSON.parse(xhr.responseText);
                success(res);
            }
        }
}