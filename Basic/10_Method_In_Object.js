const object={
    name:"A",
    age:"1",
    hobby:["Sleeping","Cycling"],
    get_name(){
        return this.name
    }
    ,
    get_hobby(){
        return this.hobby
    }
}


console.log(object.get_name())
console.log(object.get_hobby())
console.log(object)