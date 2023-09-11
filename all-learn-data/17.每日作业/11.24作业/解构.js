// 声明多个对象[{},{},{}]
var obj = [{name:"su",age:18,skill:"java"},
            {name:"su1",age:10,skill:"CSS"},
            {name:"su2",age:20,skill:"HTML"}
        ]
    // 声明空数组用来传值
    var arr = [] ;
    // 循环遍历对象，将需要的键值对赋给数组
    for(var i = 0 ; i<obj.length ; i++ ){
        // 声明需要获取的所需值的键，及其从何处来
        var {name,skill} = obj[i] ;
        // 将所需的键值对传入数组，调用数组push方法
        arr.push({
            name,
            skill
        })
    }
     // 打印输出数组传入的对应键值对
     console.log(arr);