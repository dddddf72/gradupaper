# DOM

## 1-1 如何获取DOM元素

```js
byId
byClassName
byTagName
query
```

## 1-2 DOM的增删改查

```js
appendChild()
insertBefore()

append()
prepend()
before()
after();

remove();
```

## 1-3 操作css

```js
add();
remove();
toggle();
contains();
```

# BOM

## screen

```
screen.availWidth
```

## location

```
location.href
```

## history

```js
history.back();
history.forward();
```

# 事件

```
onclick
onfocus;
onblur
```

# 函数

### 1-1 声明一个函数

```js
# 1.使用function关键字去声明
function show(){
    console.log("hello world")
}
```

```js
# 2.var
var show = function(){
    console.log("hello");
}
```



### 1-2 return

```js
function go(){
    return "1"
}
```

### 1-3 函数的参数

```js
# 1.函数传不定参
# 2.arguments
# 3.重载
```

### 1-4 函数和对象

```js
var obj = {
            name:"shang",
            sayName(){
                console.log(this.name)
            },
            sayAge:()=>{
                console.log(18)
            },
            saySkill:function(){
                console.log("javascript")
            }
    }
```

## 例子

```js
1.todoList
2.数据处理
3.tab
```

