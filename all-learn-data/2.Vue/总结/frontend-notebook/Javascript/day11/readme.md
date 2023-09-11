## Javascript核心

```
数组
字符串
正则
函数
   箭头函数
   回调函数
   带return的函数
```

```
ajax
1.同步异步
2.跨域  同源策略
```

```
3.如何实现跨域
  Access-Control-Allow-Origin:"*"
```

## 封装的http

```js
var baseUrl   ="http://192.168.4.18:3000/"
function ajax({
    url,
    method = "get",
    success
}){
   var xhr =  new XMLHttpRequest();
   xhr.open(method,url=baseUrl+url,true);
   xhr.send();
   xhr.onreadystatechange = function(){
       if(xhr.readyState == 4 && xhr.status == 200){
           var result = JSON.parse(xhr.responseText);
           success(result)
       }
   }
}


/* banner的http为例 */

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
```

