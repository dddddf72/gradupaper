function goTest<T>(s:T):T{
    return s;
}
/* 灵活性或类型检查 */
/* 泛型:任意类型 */
var  arrr:Array<number> = [1,2,3];
goTest<string>("1000");
goTest<number>(1000);
goTest<object>({name:"cheng"});