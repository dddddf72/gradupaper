/* 
1.同步有异步
2.如何实现ajax
3. es6对象 键和值相同可以只写一个
   解构
   回调函数  抄几遍
   封装ajax
 */
function ajax({
    method,
    url,
    success
}){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.send();
    xhr.onreadystatechange =  function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var result = JSON.parse(xhr.responseText);
            success(result)
        }
    }
}