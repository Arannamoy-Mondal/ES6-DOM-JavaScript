const a=[1,2,3]
const b=[100,200,a]

console.log(b)


// for spread operaor use triple dot
const c=[100,200,...a]
console.log(c) // use spread oprator
// for more google it


const object1={
    name:"A",age:"20"
}
const object2={
    name1:"B",age2:"40",...object1
}

const object3={new:"new",atk:"b",...object1}
console.log(object2)
console.log(object3)


