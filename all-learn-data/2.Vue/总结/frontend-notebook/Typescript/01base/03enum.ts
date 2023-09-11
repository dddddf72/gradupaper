/* 枚举类型:就是定义一个集合 */
enum Status {
    success=200,
    error=404,
    serverError=500
}
var success:Status = Status.success;
console.log(success)