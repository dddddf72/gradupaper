//声明对象多个值 [{}]
var obj = [{name:"su",age:12,skill:"js"},
           {name:"su1",age:15,skill:"css"},
           {name:"su2",age:19,skill:"vue"}
           ]
//声明空数组用于传值
var	 arr = [] ;
//循环遍历对象
for(var i = 0 ; i<obj.length ; i++ ){
  //声明所需获取的值所在的键
  var {name,skill} = obj[i] ;		//常规写法:var na
  me = obj[i].name;...
  //调用数组push方法
  arr.push({
    name,
    skill
  })
}
//打印输出获取到的键值对
console.log(arr);