let result1=document.getElementsByClassName("containers"),result2=document.getElementsByClassName("container")

console.log(result1+"\nType of result1: "+ typeof(result1));
for(let it of result1){
    console.log(it.innerHTML)
}
for(let it of result1){
    if(it.innerText=='Box-10'){
        it.innerText="Box-20"
    }
    console.log(it.innerText)
}