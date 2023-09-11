## 解决onLaunch的异步加载问题

```
 //1-1
 setTimeout(()=>{
            console.log("onLaunch")
        },1000)
        console.log("onLoad")
```

```
    //1-2 
    setTimeout(()=>{
            if(callback){
                console.log("onLaunch");
                callback();
            }
        },1000)
        callback = ()=>{
            console.log("onLoad")
        }
```

```js
//1-3 在小程序中解决
//app.js
/* 解决onLaunch的异步加载问题 */
App({
  onLaunch: function () {
    setTimeout(()=>{
      console.log(this.callback)
       if(this.callback){
         console.log("onLaunch");
         this.callback();
       }
    },1000)
  }
})
```

```js
//index.js
//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad(){
     app.callback=()=>{
      console.log("onLoad")
     }
  }
})

```

## wx:key

```
作用：给元素唯一的标识符,便于页面渲染和解析 
```

```
不给key是按顺序渲染的
```

```
给key是根据标识符去渲染
```

```js
<input type="text" bind:confirm="onConfirm"></input>
<view wx:for="{{arr}}" wx:key="id">
    <checkbox>
        {{item.name}}
    </checkbox>
    
</view>
```

```js
// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      {name:"html",id:1001},
      {name:"css",id:1002},
      {name:"javaScript",id:1003}
    ]
  },
  onConfirm(event){
   var value = event.detail.value;
   var arr = this.data.arr;
   arr.unshift({
     name:value,
     id:1004
   });
   this.setData({
     arr
   })
  }
})
```

## 作业

```
1.笔记
2.搜索页
3.补考的人写该补考的东西
```

