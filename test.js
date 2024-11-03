let a=[
    {id:"01",name:"A"},
    {id:"02",name:"B"},
    {id:"03",name:"A"}
]
let result=a.filter(e=>{
    console.log(`${e.id} ${e.name}`);
})
