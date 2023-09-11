```
/* 实现深拷贝 */
var arr = [{name:"cheng"},{name:"zhang"},{name:"li"}];
```

![](images/01.png)

```
 var res = [...arr];
```

![](images/02.png)

```js
res[0].name="huang";  //改变的是obj1
console.log(arr);    //所以arr也会跟着改变
```

