## 正则表达式

```
定义:规定字符串中字符出现规律的表达式
```

```
test();  //只要写书的正则表达式符合字符串的某一段,那么就为true

reg.test(str);
```

## 1-1 声明一个正则表达式

```js
var reg  =/l/ig 
//g全局搜索,i忽略大小写
var str = "hello";
console.log(str.replace(reg,"*"))
```

## 1-2 正则的语法

### 1-2-1 备选字符集

```
#  备选字符集:规定某一位字符的备选的字符列表  特点:多选一
```

```js
var str ="海去天哪里天";
var reg = /[海天]/g;
console.log(str.replace(reg,"*"))
```

```
[a-z]
[A-Z]
[0-9]
```

```js
//预定义字符集
\d  [0-9]
\w  [0-9a-zA-Z_]
\s  空格
.   所有的字符
var str ="hello1234_$#";
var reg = /./g;
console.log(str.replace(reg,"*"))
```

### 1-2-2 量词  

```
定义:规定某一位字符出现的次数
```

```js
var str = "hfdf34656";
var reg =/[\d]{4}/;
console.log(reg.test(str)) //true
```

```
#  确定的数量
{4}   //num=4
{4,}  //num>=4
{4,7}
```

```
# 不确定的数量
？{0,1}
+ {1,}
* {0,}
```

```js
var str = "hfdf346";
var reg =/\d+/;
console.log(str.match(reg)[0])
```

### 1-2-3 选择和分组

```
选择  |  //相当于或的语法
分组 ()
```

### 1-2-4 指定匹配位置

```
^  以什么开头
$  以什么结尾
```



```js
var str = "  hello   ";
var reg = /^\s+|\s+$/g;
var s =  str.replace(reg,"");
```

```
# 严格匹配   场景:需要正则表达式和字符串全部匹配的时候
var reg = /^pattern$/;
```

### 1-2-5 非

```
[^abc]  //不包含abc
```

