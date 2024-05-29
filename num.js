let element1 = document.getElementById("int1");


// function element1() {
//     let colour = element1.style.backgroundColor 
//     if (colour=="red"){
//         element1.style.backgroundColor = "green";
//         element1.console.log(parseInt(document.getElementsByClassName("int")+1))

    
//     } 
//     else if (colour == "green"){
//         element1.style.backgroundColor = "yellow";
//         element1.console.log(parseInt(document.getElementsByClassName("int")-1))

//     }
//     else{
//         element1.style.backgroundColor = "red";
//         element1.console.log(parseInt(0))
        
//     }
// }
function increment(){
    text1 = element1.textContent
    text1 = parseInt(text1) + 1
    element1.textContent = text1
    element1.style.color = "green"
    console.log(text1)
}

function decrement(){
    text2 = element1.textContent
    text2 = parseInt(text2) - 1
    element1.textContent = text2
    element1.style.color = "red"
    console.log(text2)
}

function reset(){
    text3 = element1.textContent
    text3 = parseInt(0)
    element1.textContent = text3
    element1.style.color = "yellow"
    console.log(text3)
}