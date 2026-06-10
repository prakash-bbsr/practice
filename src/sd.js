//Serialize 
const obj = {name:'prakash',age:42};
console.log(obj);
const obj1 = JSON.stringify(obj);
console.log(obj1);

//deserialize
console.log(JSON.parse(obj1));