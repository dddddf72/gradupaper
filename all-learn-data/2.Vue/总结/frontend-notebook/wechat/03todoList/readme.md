

## 1 wxs中不能使用Array.isArray()-instanceof

```
arr.constructor == "Array";
//Tips:  constructor 获取的是一个字符串
```

## 2 todoList的数据持久化

```
wx.setStorageSync('lists',[])   //设置缓存
wx.getStorageSync('lists')   //获取缓存
```

## 3 wx:for 可以渲染对象

```js
Page({
    res:{
        A:["html","css"],
        B:["vue","react"]
      }
})
```

```js
<view wx:for="{{res}}">
    <view>
        {{index}}
        <view wx:for="{{item}}" wx:for-item="value">{{value}}</view>
    </view>
</view>
```



## 4 A页面跳转到B页面（生命周期）

```
//1-1 A页面初次加载的时候会触发那几个生命周期
onLoad();
onShow();
onReady();
```

```
//1-2  A-B  A页面跳转到B页面  
A页面的onHide();

B页面
onLoad();
onShow();
onReady();
```

```
//1-3 B-A  B页面回传A页面
B页面 onUnLoad();
A页面 onShow();
```

#### 4-1 B页面调回A页面

```js
wx.navigateBack();
```

## 5 Object.keys()

```
//可以获取对象所有的key值
- Object.values();
```



## 6  将（city.js）B页面的数据回传给A（home.js）页面

```
6-1 app.js定义个currentCity,实现两个跳转页面之间的数据共享
App({
    globalData: {
        currentCity:"武汉"
    }
});
```

```js
6-2 home.js的onLoad生命周期函数中,获取currentCity
// pages/home/home.js
const app = getApp();
Page({
  data: {
     city:""
  }
  onLoad(){
    var city = app.globalData.currentCity;
    this.setData({
      city
    })
  }
})
```

```js
6-3 在city.js中改变app.js中的currentCity
const app = getApp();
Page({
    handleClick(event){
    var name = event.currentTarget.dataset.name;
    app.globalData.currentCity = name;
    wx.navigateBack();
    }
})
```

```js
6-4 home.js的onShow生命周期函数中改变的currentCity值
const app = getApp();
Page({
  data: {
     city:""
  }
  onShow(){
    var city =app.globalData.currentCity;
    this.setData({
      city
    })
  }
})
```



## 7  搜索的业务逻辑

```
Page({
    data:{
        keyword:""
    }
})
```

```js
1-1 搜索框中的值和data中的keyword是一样的
<van-search
  value="{{ keyword }}"
  shape="round"
  background="#4fc08d"
  bind:change="handleChange"
  placeholder="请输入搜索关键词"
/>
Page({
	handleChange(event){
   		 this.setData({
      		keyword:event.detail
    	})
  }
})
```



```
1-2 根据搜索框中关键字的长度判断city区域的隐藏和显示
<view wx:if="{{keyword.length ==0}}">
</view>
```

```js
1-3 根据关键字获取搜索的城市列表
Page({
  handleChange(event){
    var keyword = event.detail
    var searchCities = this.filterCity(keyword);
    this.setData({
      keyword,
      searchCities
    })
  },
  filterCity(keyword){
    var cities = this.data.result.cities;
    var arr = [];
    for(let key in cities){
       cities[key].forEach(item=>{
         if(item.name.includes(keyword) || 						item.spell.includes(keyword)){
          	 arr.push(item);
         }
       })
    }
    return arr;
  }
})
```

```js
1-4  只有搜索框中有关键字,那么搜索列表就会显示
<!-- 显示搜索的城市 -->
<view wx:if="{{keyword.length>0}}">
    <van-cell wx:for="{{searchCities}}" title="{{item.name}}" />
</view>
```

```js
1-5 显示没有结果的情况  searchCities.length
<view wx:if="{{keyword.length>0}}">
    <van-cell wx:for="{{searchCities}}" title="{{item.name}}" />
    <view class="result" wx:if="{{searchCities.length == 0}}">无结果</view>
</view>
```

## 8 最近访问的城市

```
核心逻辑:将已经访问的城市添加到缓存中去
```

```js
//1.onLoad  有缓存取缓存,没有就设置缓存
Page({
    data: {
     visitedCities:[]
  },
  onLoad(){
    var  cities =  wx.getStorageSync('cities');
    if(cities){
      this.setData({
        visitedCities:cities
      })
    }else{
      wx.setStorageSync('cities', [])
    }
})
```

```js
//2.访问城市的-->点击每一个城市的时候,添加数据到缓存
Page({
    handleClick(event){
      /* 判断缓存 */
    var cities = wx.getStorageSync('cities'); 
    var name = event.currentTarget.dataset.name;
    if(!cities.includes(name)){
      cities.unshift(name);
    }
    wx.setStorageSync('cities', cities.slice(0,3));
  }
})
```

## 9 App.js

> 在这个生命周期函数中获取定位的城市
>
> 在页面的生命周期函数(onLoad-onReady)加载之后,才会执行App.js中的onLaunch生命周期函数。

```
//1.  获取经纬度
App({
    /* 可以将共用的数据放在App.js中 */
    onLaunch: function () {
        wx.getLocation({
            type: 'wgs84',
            success: (res)=>{
                var {latitude,longitude} = res;
                console.log(latitude);
                console.log(longitude)
            }
        });
    }
});
```

```
//2. https://lbs.qq.com/  申请key(秘钥)
https://lbs.qq.com/service/webService/webServiceGuide/webServiceGcoder （api文档）
```

```js
//根据经纬度去获取城市
var {apikey} = require("./utils/config")
App({
    /* 可以将共用的数据放在App.js中 */
    globalData: {
        currentCity: ""
    },
    onLaunch: function () {
        wx.getLocation({
            type: 'wgs84',
            success: (res)=>{
                var {latitude,longitude} = res;
                console.log(latitude);
                console.log(longitude)
                var url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${apikey}&get_poi=1`;
                wx.request({
                    url,
                    header: {'content-type':'application/json'},
                    method: 'GET',
                    dataType: 'json',
                    responseType: 'text',
                    success: (res)=>{
                        var city = res.data.result.address_component.city;
                        wx.setStorageSync('locationCity', city);
                        this.globalData.currentCity = city;
                        console.log(this)
                    }
                });
            }
        });
    }
});
```



### 作业

```js
1.实现todoList
2.写笔记(缓存,wx:for--obj,app.js,wx-back)
3.搜索
4.考试的内容(没考过的优先写任务4)
```

##  算法

```js
       var obj ={
            A:[{name:"html"},{name:"ctc"}],
            B:[{name:"vue"},{name:"js"}],
            C:[{name:"vue"},{name:"js"}]

        }
        var keyword ="c";
        /* arr */
        var arr = Object.values(obj);
        var res = [];
        arr.forEach(item=>{
            res.push(...item)
        })
        console.log(res)
```

```js
       var arr = [];
        for(let key in obj){
            obj[key].forEach(item=>{
                if(item.name.includes(keyword)){
                    arr.push(item);
                }
            })
        }
        console.log(arr);
```

