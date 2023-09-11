## 1 node

### 1-1 nodeType

```
# nodeType
  1  元素节点
  2  属性节点
  3  文本节点
```

```js
# demo
<p id="app"> hello world</p>
var app = document.getElementById("app");
console.log(app.nodeType) //1;
console.log(app.firstChild.nodeType) //3
console.log(app.getAttributeNode("id").nodeType) //2
```

### 1-2 ChildNodes  Children

```JS
// childNodes--包含所有的子节点(不管文本还是元素都包含)
// children  --只会获取子节点
```

### 1-3 增加节点

```js
# 向父节点的后面添加一个节点
parentNode.appendChild(newNode)
```

```js
# insertBefore 向某个元素前面添加节点
parentNode.insertBefore(newNode,targetNode);
```

### 1-4 删除节点 removeChild

```js
parentNode.removeChild(childNode);
```

### 1-5  克隆节点

```js
node.cloneNode(true);
```

## 2.事件

```
onclick
onmouseover
onmouseout

onfocus
onblur
onchange

onkeyup
onkeydown  
	# keyCode  

onload
onresize
onscroll
```

## 3.BOM

```
alert();
confirm();
prompt(); //输入框
```

### 3-1 时间

```js
setInterval();  //间歇
setTimeout();   //超时
```

