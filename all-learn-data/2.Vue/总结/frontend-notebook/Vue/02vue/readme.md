```
jquery  库  就是将一些公用的方法封装成一个产品(文件),当我们引入一个库之后可以调用里面的方法(api);
$  ajax hide() show();
vue  koa.js 框架 （不自由）  架构师
    views
    router-->app.json
    utils --wxs
    js
    models-->http
    1.必须什么类型的文件就必须在对应的文件夹里面放置
    2.命名必须规范
    (使用框架的时候,必须按照它的规范去写。框架是库的升级)
```

```\
vue-cli 
```

## 1 安装vue-cli

```js
npm i  @vue/cli -g
vue --version
```

## 2.安装node.js的包

```
npm   //仓库换成淘宝
cnpm 
yarn
```

#### 2-1 cnpm 安装

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 2-2 npm安装

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

#### 2-3 yarn

```
npm i yarn -g
yarn config set registry https://registry.npm.taobao.org
```
### 3 创建一个vue的项目

```
vue create vue-demo
```

```
//启动项目
cd vue-demo
yarn serve
```

```
安装vscode插件
Vetur
```

## 4 vue-cli 项目介绍

```
home.vue 每一个.vue结尾的文件都识别成一个组件
```

```
<template>
//Tips:最外面只能有一个div元素
  <div class="about">
    
  </div>
</template>

```

```js
//将html,css,js揉合在一起了
<template>
  <div class="home">
    <div>{{msg}}</div>
  </div>
</template>
<script>
   export default {
       data(){
         return {
           msg:"hello world"
         }
       }
   }
</script>
<style>
.home{
  color:red
}
</style>
```

