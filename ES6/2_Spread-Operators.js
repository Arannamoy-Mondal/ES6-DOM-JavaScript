let a=[10,20,30,40,50]
let b=[60,70,80,90,100]

console.log([a,b])
console.log(`Without three dot:${a},${b}`)
console.log(`With three dot:`,...a,...b)
console.log([...a,...b]) // spread operator just use triple dot before array name
