let object={
    name:"Name1",
    age:"22",
    favCoffee:"Americano, Cuppucino, Latte"
}


const {name,age,favCoffee}=object // this is object distructuring

console.log(name,age,favCoffee)

let a=[10,20,30,40,50] // this is array distructuring
let [...k]=a
console.log(...k)