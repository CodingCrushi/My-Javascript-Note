//Object assign one way to copy all the data of obje , array or etc..
const obj = { a: 1 };
const arr = [1 , 2]
const copy = Object.assign({}, obj);
const copyArray = Object.assign([] , arr);
console.log(copy); // { a: 1 }
console.log(arr)
