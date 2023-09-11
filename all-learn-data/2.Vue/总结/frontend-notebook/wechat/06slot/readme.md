## 1 slot

### 1-1 在组件中定义一个插槽

```js
<view class="item" bindtap="handleClick" class="^ex-tag">
    <image src="{{data.coverImgUrl}}"></image>
    <view class="text">{{data.name}}</view>
    <slot name="playCount"></slot>
</view>

```

### 1-2 在组件的js文件中进行配置

```
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  }
}
```

### 1-3 组父组件中填充这个插槽

```js
  <v-item wx:for="{{playlists}}" wx:key="id" data="{{item}}">
    <view slot="playCount">11100</view>
  </v-item>
```

## 2  子组件传递值给父组件

```js
//1.通过  this.triggerEvent(eventName,value)给父组件传值
methods: {
    handleClick() {
      var id = this.properties.data.id;
      this.triggerEvent("Id",id)
    }
}
```

```
//2.父组件接收这个事件
<v-item 
  bind:Id="handleDelete"

</v-item>
```

```
//3.在父组件中对事件处理
handleDelete(event){
    console.log(event.detail)
}
```



## 3 observer

```
/*
1.当接收的父组件中的值变化的时候,就会触发observer
2.不能直接更改父组件传递过来的数据。
*/
observer:function(newVal,oldVal){
        let value = newVal +"px"
         this.setData({
           _num:value
         })
}
```



```
//重点知识
1.组件的使用
2.slot的使用
3.父子组件传值(通信)
4.页面的生命周期
5.A-B页面跳转的生命周期
6.http请求
```

