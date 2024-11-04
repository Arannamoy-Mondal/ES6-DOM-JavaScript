let a = { name: "A", id: "B" };
// JavaScript Object Notation
console.log(JSON.stringify(a)); // JSON.stringify(object name) convert in JSON string
console.log(JSON.parse(JSON.stringify(a))); // convert JSON to desired data like as string object
a = 50;
console.log(JSON.stringify(a));
console.log(JSON.parse(JSON.stringify(a))); // convert JSON to desired data like as string object
