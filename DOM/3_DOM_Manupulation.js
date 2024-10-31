document.getElementById("btn").addEventListener("click", function (event) {
  const emailInput = document.getElementById("email").value;
  const outputOutput = document.getElementById("output");
  const t = document.createElement("p");
  t.innerText = emailInput;
  outputOutput.appendChild(t);
  t.classList.add("deleteClickTarget")
  const target=document.getElementsByClassName("deleteClickTarget")
  for(const it of target){
    it.addEventListener("click",function(e){
      console.log(e.target.parentNode.removeChild(it))
    })

  }
});
