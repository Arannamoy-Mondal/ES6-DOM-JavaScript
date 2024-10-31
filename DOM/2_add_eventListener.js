document.getElementById("addBtn").addEventListener("click",function(event){
        const addInput=document.getElementById("name").value
        console.log(addInput)
        const newContainer=document.getElementById("addName")
        const p=document.createElement("p")
        p.innerText=addInput
        newContainer.appendChild(p)
        document.getElementById("name").value=" "
})
