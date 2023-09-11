// // Person name,age,getName
// class Person {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName(): void {
//         console.log(this.name);
//     }
// }
// var p: Person = new Person("cheng", 18);
// p.getName();

class Person {
    // 类的内部不需要使用var声明
    // name为实例的name
    static skill: string = "js";    //静态变量是类私有的，只能通过类调用
    name: string
    age: number

    getName(): void {
        console.log(Person.skill)
        console.log(this.name);

    }
}
var p: Person = new Person();
p.getName();