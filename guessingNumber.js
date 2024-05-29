let random = Math.floor(Math.random() * 100)
console.log(random)
// let input1_number = document.getElementById("input1")
// let text_element1 = input1.value
// text_element1 = parseInt(text_element1)

let c=0
function clicked(){
    let input1_number = document.getElementById("input1")
    let text_element1 = input1.value
    text_element1 = parseInt(text_element1) 
    if (text_element1 == random && c<=7){
        let disp_text = document.getElementById("namepara");
        disp_text.textContent = "Hey! Congratualations You Won the game and you know the binary search...";
        disp_text.style.color = "green";
    }
    else if (text_element1 == random && c>7){
        let disp_text = document.getElementById("namepara");
        disp_text.textContent = "Hey! Congratualations You Won the game and you don't know the binary search...";
        disp_text.style.color = "green";
    }
    else if (text_element1 > random){
        let disp_text = document.getElementById("namepara");
        disp_text.textContent = "Hey! Entered number is high!";
        disp_text.style.color = "blue";
        c+=1
    }
    else{
        let disp_text = document.getElementById("namepara");
        disp_text.textContent = "Hey! Entered number is low!";
        disp_text.style.color = "yellow";
        c+=1
    }
}