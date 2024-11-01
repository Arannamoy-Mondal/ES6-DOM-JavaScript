let result=document.getElementsByTagName("div")
console.log(result)
console.log(typeof(result)) // type of return

let h1=document.getElementsByTagName("h1")
console.log(h1)
console.log(typeof(h1));

for(let it of h1){
    console.log(it.innerText+" , Type of h1 tag"+typeof(it)+", Value type of h1 tag"+typeof(it.innerText))
}