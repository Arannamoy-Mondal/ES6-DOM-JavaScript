let a=[
    {id:"01",name:"A",location:"BGD"},
    {id:"02",name:"B",location:"SG"},
    {id:"04",name:"C",location:"AUS"},
    {id:"04",name:"D",location:"AUS"}
]


const result=a.forEach(element => { // it works like iterator
    console.log(`${element.id} ${element.name} ${element.location}`)
});