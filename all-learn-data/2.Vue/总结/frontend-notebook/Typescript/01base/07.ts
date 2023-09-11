/* Person  name,age,getName */
class Person{
    /* 实例的name */
    static skill:string = "js";
    name:string
    age:number
    getName():void{
        console.log(Person.skill)
        console.log(this.name);
       
    }
}
var p:Person = new Person();
p.getName();