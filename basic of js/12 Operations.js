// Operators are used to assign values, compare values, 
//perform arithmetic operations, and more.

// There are different types of JavaScript operators:

//JavaScript Arithmetic Operators 
x = y + 2
x = y % 2
x = y++

//JavaScript Assignment Operators
x += y
x %= y

//JavaScript String Operators
t1 = "Good "
t2 = "Morinig"
t3 = t1 + t2
console.log(t3)

// Comparison Operators
x === "5"
x <= 8

//Conditional (Ternary) Operator
(z < 18) ? x : y


//Logical Operators
(x < 10 && y > 1) //is true
(x === 5 || y === 5) //is false
!(x === y) //is true

// The Nullish Coalescing Operator (??)

// The ?? operator returns the first argument if it is not nullish (null or undefined).

let name = null;
let text = "missing";
let result = name ?? text;

// The Optional Chaining Operator (?.)

// The ?. operator returns undefined if an 
//object is undefined or null (instead of throwing an error).
const car = {type:"Fiat", model:"500", color:"white"};

document.getElementById("demo").innerHTML = car?.name;

// JavaScript Bitwise Operators(hardly used)

// Bit operators work on 32 bits numbers. Any numeric operand in the operation is 
//converted into a 32 bit number. The result is converted back to a JavaScript number.
x = 5 >> 1
x = 5 ^ 1

// The typeof Operator
typeof "John"   // Returns string
typeof 3.14     // Returns number 
