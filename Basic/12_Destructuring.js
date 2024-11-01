// for array
const a=[10,20,30,40,50]
const [e1,e2,e3,e4,e5]=a
console.log(e1)

// for object

const object={
    name:"Hello",
    age:"Hi",
    getName(){
        return this.name
    }
}
// not maintain indexing, must use same property of object, this like below
const {name,age,getName}=object
console.log(getName)