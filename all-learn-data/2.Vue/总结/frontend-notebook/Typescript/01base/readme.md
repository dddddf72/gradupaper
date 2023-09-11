## ts优点

```
1.提供了类型检查
2.ts最终会编译成javascript,所以可以在任何浏览器中运行。
```

```
var s:string = "hello world";
s= 10;
```

## 1 开发环境配置

```
yarn add typescript -g
yarn add ts-node -g
tsc --version
ts-node --version
```

```
或 cnpm i typescript -g
```

### 1-1 ts编译成js

```
//1. tsc编译
tsc hello.ts
```

```
//2. ts-node
ts-node hello.ts;
```

```
//3. Code-Runner
> 如果有乱码,ts-node/typescript没有安装好。
```



## 2 ts数据类型(基础类型)

#### 2-1 any

```
//变量可以赋予任何类型的值,赋值完成之后是可以改变的
var s:any = 10;
s ="hello world";
```

#### 2-2 string

```js
var s:string = "hello";
```

#### 2-3 number

```
var n:number = 10;
```

#### 2-4 boolean

```js
var b:boolean = true;
```

#### 2-5 Array

```js
var arr:string[] = ["hello","world"];
```

```js
var arr:Array<number> = [1,2,3];  //推荐使用第二种  
```

#### 2-6 object

```js
var obj:object = {name:"cheng",age:185}
```

#### 2-7 array-object

```js
var list:Array<object> = [{name:"cheng"}]
```

#### 2-8 function

```js
//1.没有返回值的函数
function show():void{
    console.log("hello");
}
```

```js
//2.有返回值的函数
function go():string{
    return "hello world";
}
```

#### 2-9 元组

```js
//给数组每一个元素指定一种类型
var s:[string,number] = ["hello",1];
console.log(s);
```

#### 2-10 枚举类型 enum

> 定义一个特定类型的集合

```js
enum Status {
    success=200,
    error=404,
    serverError=500
}
var success:Status = Status.success;
console.log(success)
```

#### 2-11 null-undefined

```js
var num = null;
num =10 //报错
```

## 3 函数

#### 3-1 函数的传参

```js
function fun(s:string):string{
    console.log(s);
    return s;
}
```

```js
//默认参数
function fun(s:string="hello world"):string{
    console.log(s);
    return s;
}
fun("good");
```

```js
function func(s:any):any{
    return s;
}
//返回值是任意类型
```

## 4 类

```js
class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    getName():void{
        console.log(this.name);
    }
}
var p:Person = new Person("cheng",20);
p.getName();
```

```js
class Person{
    /* 实例的name */
    name:string
    age:number
    getName():void{
        console.log(this.name);
    }
}
var p:Person = new Person();
p.getName();
//当没有构造函数的时候,代码底层有自动补全构造函数
```

#### 4-1 static

```js
//static修饰的变量是类所共有的,只能通过类名去调用。
class Person{
    /* 实例的name */
    static skill:string = "js";
    name:string
    age:number
    getName():void{
        console.log(Person.skill)
        console.log(this.name);
       
    }
}
var p:Person = new Person();
p.getName();
```

### 5 泛型:任意类型

```
好处:兼顾了灵活性和类型检查
```

#### 5-1 定义一个泛型函数

```js
function goTest<T>(s:T):T{
    return s;
}
goTest<string>("1000");
goTest<number>(100);
```

