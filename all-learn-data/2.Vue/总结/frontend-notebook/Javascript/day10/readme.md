```
https://www.baidu.com
http://www.baidu.com
```

```
https://www.baidu.com
https://aaa.baidu.com
```

```
https://www.baidu.com
https://aaa.baidu.top
```

```
https://www.baidu.com:8080
https://www.baidu.com:80
```

```
https://www.baidu.com:8080/a.json
https://www.baidu.com:8080/b.json
```

```
协议,子域名,主域名,端口
```

```
域:协议,子域名,主域名,端口,请求的资源文件组成
跨域: 协议,子域名,主域名,端口不同时候就叫跨域
同源策略:javascript出于同源策略,不允许从一个域访问另一个域的对象。
```

```
# 面试
1.手写一段远程ajax
2.什么跨域
```

## 1 如何去解决跨域

## 前端跨域

### 1-1 jsonp跨域

```
Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
```

```js
/* jquery-ajax  jsonp*/
        $.ajax({
            url:"http://192.168.4.18:7000/ad",
            method:"get",
            dataType:"jsonp",
            success:res=>{
                console.log(res)
            }
})
```

### 1-2 script标签(了解)

```
原理:script不受同源策略的限制
```



```js
 var script = document.createElement("script");
        script.src = "http://192.168.4.18:7000/ad?&callback=handleResponse";
        document.body.prepend(script);
        function handleResponse(res) {
            // 对response数据进行操作代码
            console.log(res)
        }
```

## 服务端跨域

```js
Access-Control-Allow-Origin','*'
```



```js
koa.js
koa2-cors//中间 
const cors = require("koa2-cors");
app.use(cors({
    origin:"*"
}));
//所有其他的域,都可以访问本域
```

```js
const koa = require("koa");
const app =  new koa();
app.use(async ctx=>{
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.body = {
        name:"cheng"
    }
})
app.listen(5000)
```

