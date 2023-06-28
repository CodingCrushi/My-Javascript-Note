//set value and this value are saved as key : value
localStorage.setItem("name1" , "Homayoun");
localStorage.setItem("name2" , "Ali");

//remove specific value
localStorage.removeItem("name2")

//clear everything in the localStrong
localStorage.clear()

//for saved object and array in the localStronge
const arr = ["mahdi" , "Homayoun"]
const obj = {name : "Homayoun" , age : 17}

localStorage.setItem("array" , arr)
localStorage.setItem("object" , JSON.stringify(obj))


const myArray = localStorage.getItem("array").split(',')
const myObj = JSON.parse(localStorage.getItem("object"))