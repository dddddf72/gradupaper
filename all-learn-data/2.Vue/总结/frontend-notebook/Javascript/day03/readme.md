## 1-1 line-height

```
1.父元素的具体的像素
2.line-height:300%;
3.line-height:2;
```

## 1-2 em,rem,vw,vh

```
em相对于父元素的font-size而言
rem相对于根元素(html)的font-size而言的
vw可视区域的width,一屏100vw;
vh可视区域的height
```

## 1-3  算术计算

```js
var a = 10;
var e= 11;
var c = true+1-"6"+"false";
var b = "abc" && 123;
var c  = 0 || 123;      
var d = a++ + ++a + 20; 
                                //11 12
var c = a-- +20 + ++a;  //12+20+12
var f = 10+false - true + ++e;  //10+0-1+12
```

## 1-4 控制语句

### 1-4-1  if

```js

        /* 
        if(boolean){
            //boolean为true的情况才会走{}中的内容

        }
         */
         var a = 10;
         var b = 20;
         if(b<a){
             console.log("今天")
         }
         console.log("hello world")
```

### 1-4-2 if-else

```js
// if else
        /* 
        if(boolean){
            //boolean true
        }else{
            //boolean  false
        }
         */
        var age=23;
        if(age>=22){
            console.log("步入婚姻的殿堂")
        }else{
            console.log("一个人爽")
        }
```

### 1-4-3    if-elseif - else

```js
        var age = 5;
        if (age >= 18) {
            console.log("成人")
        } else if (age >= 12) {
            console.log("青少年")
        } else if (age >= 6) {
            console.log("少年")
        } else {
            console.log("小屁孩")
        }
```

### 1-4-4 while

```js
/* 
        while(boolean){
            // boolean   true就是一直执行,陷入一个死循环  
        }
         */
        var a = 10;
        while(a){
            alert("hello world");
        }
```

### 1-4-5 while-for

```
// 0-2;
        debugger;
        var a  = 0;
        while(a<=2){
            console.log(a);
            a++;
        }

```

### 1-4-6 for

```js
for(var i=0;i<=2;i++){
            console.log(i)
}
        
```

### 1-4-7 for-in

```js
// for-in遍历对象
        var obj = {
            name:"cheng",
            age:18,
            skill:"js"
        }
        for(var item in obj){
            // 对象的属性名是变量的时候,要通过[],的方式去读取
            console.log(obj[item])
        }
```

### 1-4-8  switch-case

```js
 var x = "gay";
        switch (x) {
            case "男":
                console.log("男");
                break;
            case "女":
                console.log("女");
                break;
            default:
                console.log("其他")
        }
```



### 1-4-8  break和continue之间的区别

## 1-5 DOM

```
关于如何增删改查元素的标准
```

```
# id
# class
# tagName
```



## 1-6 例子

```
1.全选,不选,反选
2.隔行变色
3.点击切换
4.点击当前元素消失
```

