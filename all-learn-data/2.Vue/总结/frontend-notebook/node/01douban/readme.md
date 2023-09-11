## node.js启动服务

## 1-1 开发环境配置

```
1.node.js
2.配置cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 如果输出不是内部或者外部命令配置一下环境变量的path路径
```

## 1-2 配置

```
//卸载某个依赖
cnpm uninstall  xxx -S
```



```
cnpm init -y //将文件夹初始为npm的仓库,生成了一个package.json文件
```

```
cnpm i axios -S //安装了axios
```

```
//index.js
const url = "xxx";
/* 不写路径就会自动到node_modules这个包里面找 */
const axios = require("axios");
axios.get(url).then(res=>{
    console.log(res.data)
})
```

```js
node index.js
```

## 1-3 启动服务

```
# 安装依赖
cnpm i koa -S
```

```
/* 1.导入koa */
const  koa =  require("koa");
/* 2.新建一个应用 */
const app = new koa();

app.use(async ctx=>{
    ctx.body = "hello world"
})

app.listen(8000)
```

```
node index.js //启动服务
```

## 4.安装nodemon

```
cnpm i nodemon -g  //实时监听
```

## 5.修改package.json文件启动服务

```
{
    "scripts":{
        "start" : "nodemon index.js"
    }
}
```

```
//0到1启动一个node服务,从创建仓库npm init - y开始
```

