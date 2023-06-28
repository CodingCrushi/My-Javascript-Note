//In the javascript we have two types 

//primitive data types
    //string , number , boolean , undefinen , null
    //this type of data are just set static value
    //this type of data are used Stack for Data Structure
let name = "Homayoun";
const age = 17;
const isCold = false ;
let firstName = undefined;
let lastName = null;




//Refrence data types
    //Array , Object , Function
    //but thid type of data values are dynamic 
    //this type of are used Heap for Data Structure 

let number = [ 1, 2, 3]
const person = {
    name : "Mohammad",
    age : 18,
    address : {
        country : "Italy",
        city : "Venice"
    },
    hobbies:["coding" , "learning"]
}
function sayHello(name){
    return(
        console.log("Hello" + name)
    )
}
sayHello("Homayoun")