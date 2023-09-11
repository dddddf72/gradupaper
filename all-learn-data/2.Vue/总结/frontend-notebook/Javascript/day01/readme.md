es5--javascript-ecmascript7
es1
es6

## 1-1 Javascript声明一个变量

```js
//变量  就是一个容器,存储数据值
var  a = 10;
var b;
console.log(b) //声明一个变量不赋值,会输出undefined
```

## 1-2  数据类型 

```js
number,string,boolean
var num = 10;
var str = "hello world";
var b = true;
//typeof 
console.log(typeof num); //number
```

### 1-3 声明提前

```js
 /*  声明提前 
        js在执行代码的时候,会将所有使用var声明的变量,放置在作用域的顶层集中创建，
        赋值会留在原地
*/
console.log(a); //undefined
 var a=10;
 var b=20;
```

```js
//执行流程
var a,b;
console.log(a);
a = 10;
b = 20;
```

## 1-4 复杂数据类型

### 1-4-1 Array

```
var arr = ["html","css","javascript"]
```

```
//length属性获取数组的长度
console.log(arr.length);
```

```js
//数组的下标0开始的
console.log(arr[0]);
//arr.length-1
console.log(arr[arr.length-1]);
```

```js
//typeof arr--> object
//Array.isArray(arr)  true 
```

### 1-4-2 JSON对象

```js
        // 声明JSON对象
        // {key:value} {键:值}
        //在js中key的引号可以省略
        var cheng = {
            "name":"cheng",
            "sex":"男",
            "age":18
        }
        var obj = {
            name:"zhang",
            sex:"女"
        }
        // 2.读取Json对象的值
        console.log(cheng.name)
        // 3.给对象添加属性
        cheng.skill = "javascript"
        console.log(cheng)
```

### 1-4-3  函数

```
// function封装一段特定功能的代码块
```

```js
//1.定义一段函数
function go(){
            console.log("hello world");
}
```

```js
go()
```

```js
//函数的参数
// x,就是函数的参数  
// 函数的参数是局部变量
function show(x){
            
     console.log(x)
}
console.log(x);
show(3);
```

### 1-5 全局变量和局部变量

```js
// 在函数里面使用var定义的变量(包含函数的参数)--局部变量
// 函数外面声明的变量--全局变量
```

```js
var a = 10;
function show(){
    console.log(a);
    var b = 20;
    console.log(b);
}
show();
console.log(b);
```

## 1-6 for

```js
for(var i=0;i<3;i++){
    console.log(i);
}
```

