# JavaScript

<!-- # URL: <a href="https://arannamoy-mondal.github.io/JavaScript/">https://arannamoy-mondal.github.io/JavaScript/</a> -->

# ES6 -> ECMAScript

# Template literals (Template strings)

```js
const number1 = 20;
const str = `hello ${number1}`;
console.log(str);
```

# Array Destructure

```js
const array = [5, 10, 20, 30, 40, 50];
const [first, second] = array;
console.log(first, second);
```

# Object Destructure

```js
const a = {
  name: "A",
  age: "B",
  location: "C",
};
const { name, age, location } = a; // same as array destructuring just use square bracket instead of curly bracket
console.log(name, age, location);
```

# Object peoperty access

```js
let device = {
  type: "Laptop",
  details: {
    model: "Lenovo LOQ 13",
    cpu: "Ryzen 7",
    cpuDetails: {
      model: "Ryzen 7 5800H",
      core: 7,
      thread: 14,
      gpu: "RTX 4060",
      ram: "32 Gb",
      ramDetails: {
        ramType: "DDR5",
        ramBusSpeed: "6000 MHz",
      },
    },
  },
};

// print the cpu model and ram speed
console.log(`${device.details.cpuDetails.model} 
${device.details.cpuDetails.ramDetails.ramBusSpeed}`);
```

# map is ES6

```js
const a = [5, 6, 7, 8, 10];
// use map and print [10,12,14,16,20]
const result = a.map((e) => e * 2);
console.log(result);
```
```
Practice Problem:
let a = [
  { name: "Macbook Air M1", price: "870$", id: 1 },
  { name: "Macbook Air M2", price: "1000$", id: 2 },
  { name: "Macbook Air M3", price: "1500$", id: 3 },
];
Print name and price using map in js
```
```js
let a = [
  { name: "Macbook Air M1", price: "870$", id: 1 },
  { name: "Macbook Air M2", price: "1000$", id: 2 },
  { name: "Macbook Air M3", price: "1500$", id: 3 },
];
// print name and price using map in js
console.log(a.map((e) => e.name + " " + e.price));
```

# find in js

```js
let a = [
  { id: "01", name: "A" },
  { id: "02", name: "B" },
  { id: "03", name: "A" },
];
let result = a.find((e) => e.id == "01");
console.log(result);

a = [5, 6, 7, 8, 10];
result = a.find((e) => e == 5);
console.log(result);
```

# filter in js

`for multiple return`

```js
let a = [
  { id: "01", name: "A" },
  { id: "02", name: "B" },
  { id: "03", name: "A" },
];
let result = a.filter((e) => e.name == "A");
console.log(result);

a = [5, 6, 7, 8, 10, 5];
result = a.filter((e) => e == 5);
console.log(result);
result = a.filter((e) => e > 5);
console.log(result);
```

# forEach in js

`No return`

```js
let a = [
  { id: "01", name: "A" },
  { id: "02", name: "B" },
  { id: "03", name: "A" },
];
let result = a.filter((e) => {
  console.log(`${e.id} ${e.name}`);
});
```

# reduce in js

`must be two parameter. One is initializer, and another is your choice or needed.`

```js
let a = [10, 20, 30, 40, 50];
// total sum of array using call back()
console.log(a.reduce((l, r) => l + r, 0));
```
# class and constructor in js
```js
class Product{
    constructor(brandName,cpu){
        this.brandName=brandName
        this.cpu=cpu
    }
}
let laptop1=new Product("Lenovo","Ryzen 5 5600H")
console.log(laptop1);
```
# inheritance in js
```js
class Product{
    constructor(brandName,cpu){
        this.brandName=brandName
        this.cpu=cpu
    }
}

class Desktop extends Product{
    constructor(brandName,cpu,psu){
        super(brandName,cpu)
        this.psu=psu
    }
}

let d1=new Desktop("Custom","Ryzen 9 7950x","MSI 1000 Watt")
console.log(d1);
```

# dot notation in js

```js
let a=[
    {name:"Macbook Air M1", price:"870$",id:1},
    {name:"Macbook Air M2", price:"1000$",id:2},
    {name:"Macbook Air M3",price:"1500$",id:3}
]
console.log(a[0].name)
```

# bracket notation in js

```js
let a=[
    {name:"Macbook Air M1", price:"870$",id:1},
    {name:"Macbook Air M2", price:"1000$",id:2},
    {name:"Macbook Air M3",price:"1500$",id:3}
]
console.log(a[0]['name'])
```