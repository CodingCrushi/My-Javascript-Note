//JS Compersions
// Comparison and Logical operators are used to test for true or false.
let voteable = (age < 18) ? "Too young":"Old enough"; 
// https://www.w3schools.com/js/js_comparisons.asp

//The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
let time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//https://www.w3schools.com/js/js_if_else.asp

//Use the switch statement to select one of many code blocks to be executed.
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

//https://www.w3schools.com/js/js_switch.asp