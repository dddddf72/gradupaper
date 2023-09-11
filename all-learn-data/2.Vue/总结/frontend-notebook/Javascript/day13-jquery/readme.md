# Jquery-ajax

## 1-1 get

```js
$.get(url).then(res=>{
    console.log(res)
});

$.get(url,res=>{
    console.log(res)
});
```

## 1-2 $.ajax

```
$.ajax({
    url,
    type,
    dataType,
    data,
    success:res=>{
        console.log(res)
    }
})
```

# Axios

```
http://www.axios-js.com/zh-cn/docs/
```

## 1-1 get

```
axios.get(url).then(res=>{
    console.log(res)
})
```

## 1-2 axios

```js
axios({
    url,
    baseURL,
    method
}).then(res=>{
    console.log(res)
})
```

# Jquery - DOM

```
# 获取
eq()
filter()
find();

# 遍历
each,map
```

```
# 操作DOM
$(element).html();
# 获取输入框input的值
$(element).val();
#  操作属性
$(element).attr(key,value)
```

```
# css
1-1 获取元素距离窗口的距离
$(element).offset().top;  //距离窗口顶部的距离
$(element).offset().left; //距离窗口左手边的距离
```

```
# 判断页面是否到达底部
 $(window).scroll(function(){
            var scrollTop =  $(window).scrollTop(); //获取滚动条距离顶部的高
            var availHeight =  $(window).height(); //获取可视区域的高
            var dw = $(document).height();  //获取内容区域的高
            console.log(dw)
            /* 滚动条的高度+可视区域的height = 内容区域的高度 */
})
```

