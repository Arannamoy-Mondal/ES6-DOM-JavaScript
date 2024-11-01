const sum=(...a)=>{
    const array=[...a]
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))

const oddEven=(a)=>{
    if(a%2 ===0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

oddEven(50)
oddEven(60)