const input = document.getElementById("taskInput")
const btn = document.getElementById("addBtn")
const list = document.getElementById("taskList")

btn.addEventListener("click", () => {
  if(input.value.trim() === ""){
    
  }
  else{
    const item = document.createElement("li")
    

    item.textContent = input.value  
    list.appendChild(item)
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Deletar"
    deleteBtn.addEventListener("click", () =>{
      
    })
    input.value = ""
  }
  
})