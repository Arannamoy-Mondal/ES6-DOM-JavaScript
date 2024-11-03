# JavaScript

<!-- # URL: <a href="https://arannamoy-mondal.github.io/JavaScript/">https://arannamoy-mondal.github.io/JavaScript/</a> -->

# ES6 -> ECMAScript

# Template literals (Template strings)

```js
const number1=20
const str=`hello ${number1}`
console.log(str);
```

# Array Destructure

```js
const array=[5,10,20,30,40,50]
const [first,second]=array
console.log(first,second)
```

# Object Destructure

```js
const a={
    name:"A",
    age:"B",
    location:"C"
}
const {name,age,location}=a; // same as array destructuring just use square bracket instead of curly bracket
console.log(name,age,location);
```

# Object peoperty access
```js
let device={
    type:"Laptop",
    details:{
        model:"Lenovo LOQ 13",
        cpu:"Ryzen 7",
        cpuDetails:{
            model:"Ryzen 7 5800H",
            core:7,
            thread:14,
            gpu:"RTX 4060",
            ram:"32 Gb",
            ramDetails:{
                ramType:"DDR5",
                ramBusSpeed:"6000 MHz"
            }
        }
    }
}

// print the cpu model and ram speed
console.log(`${device.details.cpuDetails.model} 
${device.details.cpuDetails.ramDetails.ramBusSpeed}`);


```

