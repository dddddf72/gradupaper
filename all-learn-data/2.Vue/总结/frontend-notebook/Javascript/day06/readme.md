```js
Mozilla--Firefox--网景浏览器
edage--google浏览器的内核
google--对开发者非常友好
```

```js
浪潮之巅-吴军
思科 -- 华为
英伟达 -- GPU
```

## 数组的一些方法

## 1-1 增加

```js
push();
unshift();
concat();
splice(index,0,...value) //从某个下标的前面增加
```

## 1-2 删除

```
pop();
shift();
splice(index,howmany);
```

## 1-3 修改

```js
splice(index,howmany,...value)
```

## 1-4 查询

```
indexOf();
slice(startIndex,endIndex)
includes() //判断数组是否包含某个值
```

## 1-5 其他

```
join(seprate) 
//升序,降序,求和
arr.sort((a,b)=>a-b);
arr.sort((a,b)=>b-a);
arr.reduce((a,b)=>a+b);
//取最大值
Math.max(...arr);

reverse()  //对数组进行反转
```

## 1-6 遍历

```
forEach();
map();
some();
every();
for-of;
filter();
findIndex();
```

