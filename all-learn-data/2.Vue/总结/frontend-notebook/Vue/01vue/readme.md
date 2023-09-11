# 1.导入vue

```
https://cn.vuejs.org/v2/guide/installation.html#CDN
```

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## 2 hello world

```js
<div id="app">
        <!-- 插值表达式 js的语法 -->
        {{msg.slice(0,3)}}
</div>
<script>
        /* 1.new一个vue的实例 */
        new Vue({
            /* 2.将vue实例挂载到app这个元素上 */
            el:"#app",
            /* 3.就是实例可以使用的数据 */
            data:{
                msg:"hello world"
            }
        })
</script>
```

## 3 vue中的事件和获取data中的数据

```
<div id="app" @click="handleClick">
        <!-- 插值表达式 js的语法 -->
        {{msg.slice(0,3)}}
</div>
<script>
        /* 1.new一个vue的实例 */
        new Vue({
            el:"#app",
            data:{
                msg:"hello world"
            },
            methods:{
                handleClick(){
                    /* vue中获取data中的数据 直接获取,不需要加data*/
                    console.log(this.$data.msg) //不推荐使用
                    console.log(this.msg)
                }
            }
        })
</script>
```

### 4 小程序中改变data中的数据

```js
<div id="app" @click="handleClick">
       {{msg}}
    </div>
    <script>
       new Vue({
           el:"#app",
           data:{
               msg:"hello world"
           },
           methods:{
               handleClick(){
                   /* 小程序中改变data中的数据 */
                   this.msg = "change"
               }
           }
       })
    </script>
```

## 5 for/在模板中给事件传参

```js
<div id="app">
        <!-- in/of都可以实现列表循环 推荐使用of -->
       <div v-for="(item,index) of arr" 
       @click="handleClick(item.id)">
            {{item.name}} {{index}}
       </div>
    </div>
    <script>
       new Vue({
           el:"#app",
           data:{
               arr:[
                   {name:"html",id:1001},
                   {name:"css",id:1002},
                   {name:"js",id:1003}
               ]
           },
           methods:{
               handleClick(id){
                   console.log(id)
               }
           }
       })
    </script>
```

## 6 动态属性实现三元表达式

```js
	<style>
        .red{
            background-color: red;
        }
        .yellow{
            background-color: yellow;
        }
    </style>
    <!-- 
        v-for
        :src 
        双引号中可以直接使用变量的
     -->
    <div id='app'>
        <img
        :class="isState?'red':'yellow'"
        @click="handleClick"
         :src="imgUrl" alt="" 
        >
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                isState:true,
                imgUrl:"images/logo.png"
            },
            methods:{
                handleClick(){
                    this.isState = !this.isState;
                    console.log(this.isState)
                }
            }
        })
    </script>
```

## 7 v-model

> v-model可以实现双向数据绑定 ,视图更新数据更新。数据更新视图更新。

## 8 设计模式

```
小程序
vue 
mvvm (纯数据驱动的框架,不需要操作DOM)
mvc 
```

```
m  model(数据层--database,http)
v  view(数据层 -- html,css)
c  controller(路由<逻辑>控制层--js)
```

```
mvvm
m--model
v--view
vm--viewModel对象(视图数据对象)  wechat Page()   Vue --new Vue({})
```

## 9 总结

```js
1-1 hello world
1-2 @click-->methods
1-3 获取data中的数据
new Vue({
    el:"#app",
    data:{
    	msg:"hello world"
	}
})
this.msg // this.$data.msg
1-4 v-for="item of arr" v-if
1-5 点击删除当前项
1-6 动态数据 
1-7 v-model
```

```
//作业
1-1 笔记
1-2 todoList
1-3 读取top250
```

