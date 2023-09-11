# vue-egg-shop

```
axios
vue-cookie
element-ui
```

## 登录模块

### 7-1 配置跨域访问cookie

```js
//1-1 在前端的配置
axios.defaults.baseURL = "http://192.168.4.18:7001" //tips:地址一定是ip
axios.defaults.withCredentials = true;
```

```js
//1-2 服务器端的配置  egg.js
cnpm i egg-cors -S


//config/plugin.js

module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  }
};

//config/config.default.js
config.cors = {
    origin: ctx => {
      return ctx.headers.origin
    },
    credentials: true
}
```

### 7-2 实现登录

```
1. 前端Login.vue获取用户名密码(this.ruleForm)
2. 携带用户名和密码向服务器端发送请求(/api/login)
3. 在后端(/controller/api/login.js)接收用户名和密码(ctx.request.body)
4. 携带用户名和密码向数据查询(ctx.model.User.find(ctx.request.body))
5. 将结果返回给客户端
```

```js
//1. 前端Login.vue获取用户名密码(this.ruleForm)
//2. 携带用户名和密码向服务器端发送请求(/api/login)
<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>

UserHttp.login(this.ruleForm).then(res=>{
                 console.log(res.data)
                 var {code,msg} = res.data;
                 if(code==200){
                     this.$message({
                         message:msg,
                         type:"success"
                     })
                     this.$router.push("/")
                 }else{
                     this.$message({
                         message:msg,
                         type:"error"
                     })
                 }
})
```

```js
3. 在后端(/controller/api/login.js)接收用户名和密码(ctx.request.body)
4. 携带用户名和密码向数据查询(ctx.model.User.find(ctx.request.body))
5. 将结果返回给客户端
class LoginController extends Controller {
  async index() {
    
    const { ctx } = this;
    var {name,pass} = ctx.request.body;
    var res = await ctx.model.User.find({name,pass});
    if(res.length){
        ctx.cookies.set("name",name,{
          httpOnly:false
        })
        ctx.body = {
            code:200,
            msg:"登录成功",
            name
        }
    }else{
        ctx.body = {
            code:400,
            msg:"登录失败,用户名或密码错误"
        }
    }
  }
}
```

### 7-3 使用cookie记录登录状态

```js
//1.登录成功之后设置cookie
# controller/api/login.js
class LoginController extends Controller {
  async index() {
    ....
    if(res.length){
        ctx.cookies.set("name",name,{
          httpOnly:false //设置cookie在前端可读
       ....
    }
  }
}
```

```js
// 2.前端使用cookie  要安装vue-cookie
# views/Home/components/HomeTop.vue
export default {
  data(){
    return{
      name:this.$cookie.get("name")
    }
  }
}
<span>{{name}}</span>
<router-link to="/login" v-show="!name"><el-button >登陆</el-button></router-link>
```

### 7-4 登出

```js
// 1-1 前端代码
# views/Home/components/HomeTop.vue
<el-button @click="handleLogout" >退出</el-button>
methods:{
    async handleLogout(){
      var res = await UserHttp.logout();
      console.log(res.data)
      var {msg} = res.data;
      this.$message({
        message:msg
      })
      this.name = ""
    }
  }
```

```js
//1-2 后端代码
# controller/api/logout.js
class LogoutController extends Controller {
  async index() {
    
    const { ctx } = this;
    ctx.cookies.set("name","");
    ctx.body = {
        code:200,
        msg:"退出登录"
    }
  }
}
```

### 7-5 实现登录拦截

```js
// 配置一个登录拦截的中间件
// 1-1 middleware/loginAuthed.js
module.exports = (option, app) => {
    return async function auth(ctx, next) {
        /* 实现中间件 */
        const url = ctx.path;
        console.log(url)
        if(url =="/api/goods" || url =="/api/login"){
            await next();
        }else{
            if(ctx.cookies.get("name")){
                await next();
            }else{
                ctx.body ={
                    code:400,
                    msg:"未登录请先登录"
                }
            }
        }

    }
}
```

```js
//1-2 config/config.default.js
config.middleware = ["loginAuthed"];
```

## Http拦截器

### 使用axios拦截器+vuex实现全局http的加载

```js
# 1-1 vuex中定义isLoading的状态,用这个状态控制加载的隐藏显示
export default new Vuex.Store({
  state: {
    isLoading:false
  }
}
```

```js
# 1-2 设置axios请求和响应的拦截器,在拦截器中改变vuex的状态

import store from '../store/index.js'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("http-req")
    store.state.isLoading = true;
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.state.isLoading = false
    console.log("http-res")
    return response;
    
});
```

```js
# 1-3 使用element-ui的loading组件  App.vue

<div id="app" v-loading="this.$store.state.isLoading">
    <router-view/>
</div>
```

## 购物车模块

### 1-1 更新购物车中商品的数量

```js
const Controller = require('egg').Controller;

class EditCartController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.request.body);
    var {id,productNum} = ctx.request.body;
    var res = await ctx.model.User.updateOne({"cartList._id":id},{$set:{
        "cartList.$.productNum":productNum
    }})
    console.log(res)
  }
}

module.exports = EditCartController;
```

### 1-2 删除购物车

```js
const Controller = require('egg').Controller;

class DeleteCartController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.request.body);
    var{id} = ctx.request.body;
    try{
        var res = await ctx.model.User.updateOne({},{$pull:{cartList:{_id:id}}});
        if(res.nModified){
            ctx.body = {
                code:200,
                msg:"删除成功"
            }
        }
    }catch(err){
        ctx.body = {
            code:400,
            msg:"输入的参数不合法"
        }
    }
    
  }
}

module.exports = DeleteCartController;
```

### 1-3 购物的全选和反选

```
<p>全选  <el-checkbox v-model="checkedAll"></el-checkbox></p>
```

```js
computed:{
    checkedAll:{
      get(){
          return  this.tableData.every(item=>item.checked);
      },
      set(val){
        // console.log(val);
        //http
        UserHttp.setAllChecked(val).then(()=>{
          // console.log(res)
        })
        this.tableData.forEach(item=>{
          item.checked = val;
        })
      }
    }
  },
```

```js
//后台的代码  core:批量更新cartList中每一个item的checked
class SetCheckedController extends Controller {
  async index() {
    const { ctx } = this;
    /* checked */
    console.log(ctx.request.body);
    var {checked} = ctx.request.body;
    var res = await ctx.model.User.find({},{"cartList":1});
    var cartList = res[0].cartList;
    cartList.forEach(item=>{
        item.checked = checked;
    })
    await ctx.model.User.updateOne({},{cartList})
    ctx.body = {
        code:200,
        msg:"切换状态成功"
    }
  }
}

module.exports = SetCheckedController;
```

