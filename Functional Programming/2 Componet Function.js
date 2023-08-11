//the idea of the functional programming is to write small and reuseable function
//and then compuse them to build more complex function to solve the real world problem


//This is the none function style of the code 
let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

//Now we have two small and resuable functions it just 
//gives them and input and see the result 
// trim
const trim = str => str.trim();

//wrapInDiv
const wrapInDiv = str => `<div>${str}</div>`;

//return string into lower case 
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); 
//we call this function compisition in functional programming
