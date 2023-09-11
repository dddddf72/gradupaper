function goTest<T>(s: T): T {
    console.log(s)
    return s;
}
// 灵活性且类型检查
// 泛型：任意类型
goTest<number>(100);
goTest<string>("1000");
goTest<object>({ name: "cheng" })