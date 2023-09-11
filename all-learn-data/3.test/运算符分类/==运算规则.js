console.log(false == "")
// console.log(Number("")) 输出为0 ，Number（“   ”），Number(null)输出为0
// 只要有一边为boolean,先将两边转为Number
console.log(true == 1)
// 在==运算中，null==undefiend ,Number(undefined)输出为NaN,NaN和任何运算都为NaN  
console.log(null == undefined)
// null和undefined不能转化成其他值
console.log(undefined == false)
// 一边为string ,一边为number，先转化成number
console.log(1 == "1")
