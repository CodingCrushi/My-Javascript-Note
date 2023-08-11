//In this example great and sayHello we called them higher order function
//higher order function is a function takes functions as an argument or return it or both
//instead of working boolean and string it gose higer to upon function this the reason we called
//higher order function 


function great(fn) {
  console.log(fn());
}

function sayHello() {
  return function () {
    return "Hello World";
  };
}


//here some rebuil higher order functions in the javascript 
//map is higher order function that takes function as an argument 

let numbers = [1,2,3];

numbers.map(number => number * 2)

//setTimeout is higher order function because it takes functions as an argument
setTimeout(() => console.log("hello") , 1000)