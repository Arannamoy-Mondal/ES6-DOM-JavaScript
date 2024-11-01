// length function syntax arrayName.length
// only applicable for array type find function arrayName.find(el=>el==40) for more google it
let a = [10, 20, 30, 40, 50, 60];
let result = a.find((el) => el == 100);
console.log(result);
let objectArray = [
  {
    name: "A",
    id: "20",price:2000
  },
  { name: "B", id: "20",price:4000 },
  { name: "C", id: "20",price:5000 },
  { name: "D", id: "40",price:6000 },
];
result = objectArray.find((el) => el.id == "20");
console.log(result);
// filter for multiple search. always return array
result = objectArray.filter((el) => el.price >= 10000);
console.log(result);

// map for concat, arithmatic operation 
result=objectArray.map(el=>el.id+"#")
console.log(result)

// for each for print any thing
objectArray.forEach(el=>{
    console.log(el.id)
})