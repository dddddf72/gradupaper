## 回调地狱

```js
<div id="app"></div>
    <h2>列表数据</h2>
    <p class="dp"></p>
    <audio src="" controls></audio>
    <script>
        /* 回调地狱 */
        /* 1.华语中的第一条数据 */
        var url ='http://192.168.4.18:3000/top/playlist/?cat=华语';
        $.ajax({
            url,
            success:res=>{
                var {name,id} = res.playlists[0]
                $("#app").html(name)
                /* 2.列表页的数据 */
                var listUrl = `http://192.168.4.18:3000/playlist/detail?id=${id}`;

                $.ajax({
                    url:listUrl,
                    success:res=>{
                        var {name,id} = res.playlist.tracks[0]
                        $(".dp").html(name)
                        console.log(id)
                        /* 3.根据id获取音乐播放的url链接 */
                        var musicUrl = `http://192.168.4.18:3000/song/url?id=${id}`
                        $.ajax({
                            url:musicUrl,
                            success:res=>{
                                let src = res.data[0].url;
                                $("audio").attr("src",src)
                            }
                        })
                    }
                })


            }
        })
```

## ajax迭代

### 1-1 原生ajax

```js
        var url = "http://192.168.4.18:8000/"
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result  = JSON.parse(xhr.responseText);
                console.log(result)
            }
        }
```

### 1-2 回调函数去封装ajax

```js
 function ajax(url,method="get",success) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    success(result)
                }
            }
}
# 需要记住传参的顺序
```

```js
function ajax({
            url,
            method="get",
            success
        }) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    success(result)
                }
            }
}
```

### 1-3 jquery-ajax

```js
$.ajax({
            url:"http://192.168.4.18:8000/",
            type:"get",
            dataType:"json",
            success:res=>{
                console.log(res)
            }
})
```

### 1-4 callback封装jquery-ajax

```js
function http({url,type="get",success}){
            $.ajax({
                url,
                type,
                dataType:"json",
                success:res=>{
                    success(rs)
                }
            })
}  
```

### 1-5 promise封装ajax

> 将纵向嵌套的ajax,变成横向的了,结构稍微清晰了一点。

```js
function http(url){
            return new Promise((resolve,reject)=>{
               $.ajax({
                   url,
                   type:"get",
                   success:res=>{
                       resolve(res)
                   },
                   error:err=>{
                       reject(err);
                   }
               })
            })
}
```

```
# 今日知识要点
1.回调函数
2.回调地狱(能写)
3.promise
```

