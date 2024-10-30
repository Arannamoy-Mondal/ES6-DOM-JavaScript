let a=[
    {id:"01",name:"A",location:"BGD"},
    {id:"02",name:"B",location:"SG"},
    {id:"04",name:"C",location:"AUS"},
    {id:"04",name:"D",location:"AUS"}
]


let result=a.filter(pd=>pd.id=="04") // for multiple search, if not match it returns empty array
console.log(result)