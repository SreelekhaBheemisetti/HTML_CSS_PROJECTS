function clicked(){
  let name_input = document.getElementById("name")
  let name_text = name_input.value 
  let pass_input = document.getElementById("pass")
  let pass_text = pass_input.value
  if(name_text===""){
    let name_error = document.getElementById("namepara")
    name_error.textContent = "enter your name"
    name_error.style.color = "red"
  }
  else{
    let name_error = document.getElementById("namepara")
    name_error.textContent = ""
  }

  if(pass_text===""){
    let name_errorr = document.getElementById("passpara")
    name_errorr.textContent = "password"
    name_errorr.style.color = "red"
  }
  else{
    let name_error = document.getElementById("passpara")
    name_error.textContent = ""
  }
}
