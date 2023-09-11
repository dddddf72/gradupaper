## 1. 数据类型之间转换

### 1-1 强制转换

#### 1-1-1 string,boolean-->number

```js
# 1.1 string-->number 
特点:只能识别纯数字的字符串
```

> Number(value)

```js
var a = "10";
var str = "hello"
console.log(Number(a))  //10
console.log(Number(str)) //NaN  不是一个数字
```

```js
# 1.2 boolean -->number
true --> 1
false -->0
```

#### 1-1-2   number,string-->boolean

```js
# 1-1 number--boolean
特殊：0-->false,其他情况都为true
var a = 0;
var b = 10;
console.log(Boolean(a)) //false
console.log(Boolean(10)) //true
```

```js
# 1-2 string--boolean
特殊：""-->false
```

### 1-1-3 any-boolean

```
Boolean();
```



### 1-2 自动转换 （算术,比较计算）

> 将数据转换为number,再进行计算(比较)
>
> 特殊:+运算中,只要有一边为字符串,那么结果一定字符串。+号起拼接符作用
>
> 

```js
# 1-1 +,-  
var a = true;
var b = 10;
var c = "1";
console.log(a+b); //11  
console.log(b+c) //"101"
console.log(a-c) //0
```

```js 
# 1-2 >,<
var a = "hello";
var b = true;
var c = "10";
console.log(a>b);//false  NaN>1  NaN和任意值计算,结果都为NaN
console.log(b>c); //false
```

### 1-3 Any-Number

```
Number();
parseInt();
parseFloat();
```

### 1-4 Any-String

```js
String();
toString();
+"";
```

## 2. 运算符和表达式

### 2-1 算术运算

```js
+，-，*，/,%
# 先将值转换为number(Number),再进行计算。
```

> Tips: +特殊,如何有一边为字符串,那么+起拼接符作用,结果一定是字符串。

### 2-2 比较运算(关系)

```js
>,<,>=,<=,==,!=
```

> 将值转换为number,再进行比较,返回的是boolean

### 2-3 逻辑运算

```js
&&  与   两边都为true,结果就为true
||  或   只要有一边为true,结果就为true
!   非   取反
```

```js
var a = false;
console.log(!a); //
```

### 2-4 赋值运算

```js
+=,-=,*=,/=,%=
```

### 2-5 三元表达式

```js
var a=(10>4)?10:4；
```

### 2-6 ++，--

```js
/* 
        ++放前面先自增,后运算
        ++放后面先运算,再自增
*/
```

```js
/*
        -- 放前面先自减,后运算
        -- 放后面先运算,再自减
*/
```

## 3. 箭头函数

```js
var go =()=>{
    console.log("hello world")
}
```

```js
# 带参数的箭头函数
var test = (x)=>{
    console.log(x);
}
```

```js
# 箭头函数的简写
var show = ()=>console.log("hello world");
```

```js
# 带参数的简写
# Tips:只有一个参数,可以省略小括号,只有一段表达式,可以省略大括号
var main = x=>console.log(x);
```

