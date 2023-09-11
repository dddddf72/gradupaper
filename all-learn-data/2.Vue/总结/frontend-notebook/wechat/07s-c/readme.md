

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



## 2 http请求

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

```js
1-6 （play页面）对播放按钮执行点击事件,如果和缓存中的值联动
handleMusic(){
    var id = this.data.play.id;  //+
    var playState = this.data.playState;
    var states = wx.getStorageSync('states') //+
    if(playState){
      this.setData({
        playState:false
      })
      audio.pause();
      states[id] = false;  //+
    }else{
      this.setData({
        playState:true
      })
      states[id] = true;  //+
      audio.play();
    }
    wx.setStorageSync('states', states)  //+
  }
```

## 5  实现3s倒计时

```js
1-1 在data中定义num=3这个变量,设置倒计时的初始值
Page({
    num:3
})
```

```js
1-2 需要每过1s,num减1
Page({
  data: {
    num:3
  },
  onLoad(){
    this.reduceCount();
  },
  reduceCount(){
    var num = this.data.num;
    setTimeout(()=>{
        num--;
        if(num>=0){
          this.setData({
            num
          })
          this.reduceCount();
        }
    },1000)
  }
})
```

```js
1-3 倒计时为0,则跳转到主页
reduceCount(){
    var num = this.data.num;
    setTimeout(()=>{
        num--;
        if(num>=0){
            //这里可以获取倒计时为0的情况
          if(num==0){     //++
            wx.navigateTo({
              url: '/pages/index/index'
            })
          } //++
          this.setData({
            num
          })
          this.reduceCount();
        }
    },1000)
  }
```

```
1-4 点击跳过按钮跳转
<button 
bind:tap="handleJump"
type="primary">跳过{{num}}</button>
Page({
    handleJump() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})
```

>bug:点击跳转,会有问题；首页会重复加载。因为在欢迎页面定时器还存在

```js
1-5 解决定时器造成页面重新加载的问题,路由栈中重复路由的问题
// 1.定义timer变量获取定时器
var timer = null;
Page({
  ...
  reduceCount() {
    var num = this.data.num;
    //2.记录定时器
    timer = setTimeout(() => {
      ...
    }, 1000)
  },
  handleJump() {
     //3.清除定时器
    clearTimeout(timer)
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})
```

