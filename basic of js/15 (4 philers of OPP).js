//here are 4 philres of the OPP in the javascript 

///1 Encapsulation
//we group function and variables that related each other and what we called 
//encapsulation
class Persion {
    constructor(fName , lName , age){
        this.firstName = fName ;
        this.lastName = lName ;
        this.age = age
    }

    sayHello(){
        return(
            `Hi my name is ${this.firstName}
             ${this.lastname} and Im ${this.age}`
        )
    }
}

let homayoun = new Persion("Homayon" , "mohammadi" , 17)
let mohammad = new Persion("Mohammad" , "Mohammadi" , 20)
///2 Abstraction
//when we hide the details we called abstractions

///3 Inheritance
//maechanism in which one class acquires the property of another class

///4 Polymorphism
//mean "many forms" and it occurs when we have many classes 
//that are related to each othe by inheritance
class Animal {
    constructor(firstName ){
        this.firstName = firstName ;
    }
    eat(){
        console.log(`Im ${this.firstName} and eating`)
    }
    walk(){
        console.log(`Im ${this.firstName} and walking`)
    }
}

class Dog extends Animal{
    constructor(firstName , age , color){
        super(firstName)
        this.age = age ;
        this.color = color;
    }yv
    woof(){
        console.log("wooofing...")
    }
}
class Cat extends Animal{
    constructor(firstName , age){
        super(firstName)
        this.age = age;
    }
    meow(){
        console.log("meowwwwing.....")
    }
}