let image_element = document.getElementById("img")

let button_element = document.getElementById("button")


function clicked(){
    let coloru = button_element.style.backgroundColor 
    if(coloru=="green"){
        image_element.src = "https://img.freepik.com/free-photo/closeup-shot-sleepy-fluffy-cute-dog-lying-ground_181624-45929.jpg?t=st=1714935486~exp=1714939086~hmac=6d5683cfe690a3e6dc1241320b58beb44b0d8eab068e6c8b700f21fd5f8736ce&w=900"
        button_element.style.backgroundColor = "red"
        button_element.textContent = "Sad mood"
    }
    else{
        image_element.src = "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1714935004~exp=1714938604~hmac=fd8b6a20b937aee47301626275bc0d214d060e285acce79f81abd3c27d9651fa&w=900"
        button_element.style.backgroundColor = "green"
        button_element.textContent = "Happy mood"
    }

    

}


