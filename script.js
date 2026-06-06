const input = document.getElementById("taskInput")
const btn = document.getElementById("addBtn")
const list = document.getElementById("taskList")
const tare = document.getElementById("tarefa")
let contador = 0



function atualizartela(){
  tare.textContent = `Tarefas: ${contador}`
}

atualizartela()

function addtarefa(){
  contador++
  atualizartela()
}

function remtarefa(){
  contador--
  atualizartela()
}


btn.addEventListener("click", () => {
  if(input.value.trim() === ""){
    return
  }
  else{
    const item = document.createElement("li")
    const deleteBtn = document.createElement("button")
    const check = document.createElement("input")
    addtarefa()
    

    item.textContent = input.value  
    check.type = "checkbox"
    deleteBtn.textContent = "Deletar"
    
    item.appendChild(check)
    item.appendChild(deleteBtn)
    list.appendChild(item)
    input.value = ""
    
    check.addEventListener("click", () =>{
      
      if(check.checked){
        item.style.color = "green"
        item.style.textDecoration = "line-through"
      }
      else{
        item.style.color = "black"
        item.style.textDecoration = "none"
      }
    })
    deleteBtn.addEventListener("click", () =>{
      item.remove()
      remtarefa()
      
    })
    
    
  }
  
})