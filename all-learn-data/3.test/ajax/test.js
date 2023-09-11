
        // includes 字符串是否包含某位字符
        // var str = "hello"; //"l-l"
        // var   a = str.slice(2,4);
        // var  b = a.split("")
        // var c = b.join("-")
        // var d = `"${c}"`
        // console.log(a)


        // 回调函数
        // var show = res =>console.log(res);
        // var  go = callback => {
        //     var a = 10;
        //     callback(a);
        // }
        // go(show)



// 什么是跨域，同源策略
/* 
        跨域是指当协议、子域名，主域名，端口号任何一个不同时则为跨域
        同源策略，不允许从一个域访问另一个域的对象
*/

// 什么是同步，异步
/* 客户端向服务器端发送请求的时候，不能进行其他操作
   客户端向服务器端发送请求的时候，可以进行其他操作
*/

// 实现原生的ajax


        var arr = [1,2,3,4,6];//[1,3,6]  //"1-3-6"
        arr.splice(1,1);
        arr.splice(2,1);
        console.log(arr)    //[1,3,6]
        var res = arr.join("-");
        var res1 = `"${res}"`
        console.log(res1)

        
