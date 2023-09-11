# demo

## 1 vue-cli全局过滤器

```js
//main.js
Vue.filter("handleStr",(val)=>{
  if(val.length>4){
    return val.slice(0,4)+"..."
  }
  return val;
})
```

```js
//App.vue  组件中直接使用,不需要导入
<div id="app">
      {{msg | handleStr}}
</div>
```

## 2 拆分过滤器

```js
1-1 新建filters文件夹 filters/index.js
import Vue from 'vue';
Vue.filter("handleStr",(val)=>{
    if(val.length>4){
      return val.slice(0,4)+"..."
    }
    return val;
})

```

```js
// main.js中导入 filters/index.js
import './filters/index'
```

## 总结

```
1.使用正则去判断数组和对象。
2.封装了localStorage
3.使用计算属性实现todoList
4.实现了局部过滤器
5.vue-cli实现全局过滤器
6.vue-cli中拆分全局过滤器
```

```
//作业
todoList加入缓存的功能
```



