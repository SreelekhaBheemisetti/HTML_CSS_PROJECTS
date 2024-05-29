// let butt1_name = document.getElementById("button1");
// let butt2_name = document.getElementById("button2");
// let butt3_name = document.getElementById("button3");

// function functionName1(){
//     butt1_name.src = "https://img.freepik.com/premium-photo/dog-is-jumping-air-with-his-mouth-open_933706-2737.jpg?w=740"
//     // butt1_name = butt1_name.textContent

// }

// function functionName2(){
//     butt2_name.src = "https://img.freepik.com/free-photo/adorable-dog-fantasy-style_23-2151147710.jpg?t=st=1715257911~exp=1715261511~hmac=a81a7a9afa00a29a4debf567b1e1a698761eed8c854c67bb73d1924a722dba77&w=900"
//     butt2_name = butt2_name.textContent
    
// }


// function functionName3(){
//     butt3_name.src = "https://img.freepik.com/free-photo/adorable-dog-fantasy-style_23-2151147700.jpg?t=st=1715154015~exp=1715157615~hmac=802431048e806ce10ce0124c433fd35689b3a7f4c712260af3279f9f2e0a0876&w=900"
//     butt3_name = butt3_name.textContent
    
// }


let h1Element = document.createElement('h1')
h1Element.textContent = "web technologies"
// document.body.appendChild(h1Element)
let containerElement = document.createElement('div')
document.body.appendChild(containerElement)

let buttonEle = document.createElement('button')
buttonEle.textContent= "Click here"


containerElement.appendChild(h1Element)
containerElement.appendChild(buttonEle)


// buttonEle.onclick = function() {
//     h1Element.textContent = "Sreelekha"
//     h1Element.style.color = 'blue'
// }

buttonEle.classList.add("style.but")