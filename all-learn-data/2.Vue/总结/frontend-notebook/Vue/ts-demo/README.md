# ts-demo

## 1 vue-ts  事件

```
<div @click='handleClick'>hello world</div>
```

```js
import {  Vue } from 'vue-property-decorator';
export default class App extends Vue {
    handleClick():void{
      console.log("click")
    }
}
```

### 2 watch属性 

> 监听data中的值,当data中的值变化的时候,触发；

```js
<div id='app'>
        <input type="number" v-model="num">
    </div>
    <!-- watch,computed -->
    <script>
        new Vue({
            el:"#app",
            data(){
                return {
                    num:10
                }
            },
            watch:{
                num:function(val){
                    console.log(val)
                }
            }
        })
    </script>
```

## 3 计算属性

```js
<div id="app">
        <input type="number" v-model.number="price">*
        <input type="number" v-model.number="count">
        {{sum}}
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                price:3,
                count:10
            },
            /* 当data中参与计算的值发生改变时候,会触发 */
            computed:{
                sum(){
                    return this.price*this.count
                }
            }
        })
    </script>
```

## 4 get,set方法

```js
<div id='app'>
        <input type="checkbox" v-model="myState">
    </div>
    <script>
        /* computed中的值是依赖于data的 */
        new Vue({
            el:"#app",
            data:{
                state:true
            },
            computed:{
                myState:{
                    get(){
                        console.log("state")
                        return this.state;
                    },
                    set(value){
                        console.log("set")
                        this.state = value;
                    }
                }
            }
        })
    </script>
```

## 5 回车事件

```js
<!-- 回车事件 -->
    <div id='app'>
        <input type="text"
        @keyup.enter="handleEnter"
         v-model.trim="keyword">
    </div>
    <script>
        new Vue({
            el:"#app",
            data:{
                keyword:""
            },
            methods:{
                handleEnter(){
                   console.log(this.keyword)
                }
            }
        })
    </script>
```

```
作业:
1.笔记
2.使用计算/监听属性实现todoList  http://www.todolist.cn/
```

