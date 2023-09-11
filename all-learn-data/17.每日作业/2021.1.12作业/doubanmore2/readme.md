

## 1 需要data中获取一下数据结构

```
/* lists--json对象 */
        var lists  = {
            newMusic:{
                title:"热门歌曲",
                iconUrl:"/images/icons/new.png",
                res:[]
            },
            hotMusic:{

            },
            dj:{
                
            }
}
```



### 2 http请求

>Tips:es6(async,await)和vant-ui不兼容

##  3 传递多个参数

```js
wx.navigateTo({
        url: `/pages/more/more?keyword=${keyword}&title=${title}`
});
```

## 4 音乐播放

```js
1-1 获取音乐播放器,onLoad生命周期函数中执行播放
//1.获取播放器
const audio =  wx.getBackgroundAudioManager();
Page({
	data:{
	  /* 定义音乐播放的状态,默认是true */
       playState:true
	},
     onLoad(){
        ...
        audio.title="hello world";
        audio.src=playUrl;
        ...
    }
})
```

```js
<image class="play" src="{{playState?'/images/icons/play.png':'/images/icons/pause.png'}}"></image>
```

```
1-2 使用按钮控制音乐播放的状态
<view bind:tap="handleMusic"></view>
//coreApi  audio.play() 控制音乐播放  audio.pause()控制音乐的暂停
```

```js
Page({
  handleMusic(){
    var playState = this.data.playState;
    if(playState){
      this.setData({
        playState:false
      })
      audio.pause();
    }else{
      this.setData({
        playState:true
      })
      audio.play();
    }
  }
})
```

````js
1-3  
#   播放页面(play)的按钮,和列表页面（playlist）的按钮是一致的
#   方案:使用缓存
#   缓存中数据结构
{
    id：true
}
#  需要正在点击的id为true,其他的都是false
{
    1001:true,
    1002:false,
    1003:false
}
````

```js
1-3-1   (play)onLoad生命周期函数中判断是否存在缓存
         let states = wx.getStorageSync('states');
        //1.有缓存,则让正在点击的item的id(key),让对象去累加属性
        /* {1001:true} */
        if(states){
           states[id] = true;
           //{1001:true,1002:true}
           wx.setStorageSync('states',states)
        }else{
           //2.没有缓存,则设置一个空对象,让正在点击的item的id(key),去设置空对象
          let  states = {};
          states[id] = true;
          /* {1001:true} */
          wx.setStorageSync('states',states)
		}
```

```js
1-3-2  播放音乐只有正在点击的id为true,其他都是false
		let states = wx.getStorageSync('states');
        /* {1001:true} */
        if(states){
           states[id] = true;
           //{1001:true,1002:true}
           for(let key in states){
             if(key !=id){
               states[key] = false
             }
           }
           wx.setStorageSync('states',states)
        }else{
          let  states = {};
          states[id] = true;
          /* {1001:true} */
          wx.setStorageSync('states',states)
        }
```

```
1-4 需要playlist中的onShow生命周期函数中,获取缓存
Page({
    data:{
        states:""
    },
    onShow(){
        var states = wx.getStorageSync("states");
        this.setData({
            states
        })
    }
})
```

```js
<image class="play" src="{{states[item.id]?'/images/icons/play.png':'/images/icons/pause.png'}}"></image>
```

```js
1-5 需要在app.js中的onLaunch生命周期函数中清空缓存
App({
    onLaunch(){
        wx.setStorageSync('states', null)
    }
})
```

