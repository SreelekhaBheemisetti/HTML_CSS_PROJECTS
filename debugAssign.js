// let first = document.getElementById("firstBlank");
// let second = document.getElementById("secondBlank");
// let totalInput = document.getElementById("total");
// let para = document.querySelector(".game-result");

// function restartOn() {
//     let firstNumber = Math.floor(Math.random() * 100);
//     let secondNumber = Math.floor(Math.random() * 100);
//     first.textContent = firstNumber;
//     second.textContent = secondNumber;
//     para.textContent = "";
//     totalInput.value = "";
// }

// function checkOn() {
//     let firstNumber = parseInt(first.textContent);
//     let secondNumber = parseInt(second.textContent);
//     let total = parseInt(totalInput.value);

//     if (firstNumber + secondNumber === total) {
//         para.textContent = "You got it right!";
//     } else {
//         para.textContent = "Check again";
//     }
// }


// restartOn();

// let first = document.getElementById("firstBlank");
// let second = document.getElementById("secondBlank");
// let totalInput = document.getElementById("total");
// let para = document.querySelector(".game-result");
// function restartOn() {
//     let firstNumber = Math.floor(Math.random() * 100);
//     let secondNumber = Math.floor(Math.random() * 100);
//     first.textContent = firstNumber;
//     second.textContent = secondNumber;
//     para.textContent = "";
//     totalInput.value = "";
// }
// function checkOn() {
//     let firstNumber = parseInt(first.textContent);
//     let secondNumber = parseInt(second.textContent);
//     let total = parseInt(totalInput.value);
//     if (firstNumber + secondNumber === total) {
//         para.textContent = "You got it right!";
//         } else {
//             para.textContent = "Check again";
//             }
//         }

//     // Initialize the game
// restartOn();
  

let first = document.getElementById("firstBlank");
let second = document.getElementById("secondBlank");
let totalInput = document.getElementById("total");
let para = document.querySelector(".game-result");

function restartOn() {
    let firstNumber = Math.floor(Math.random() * 100);
    let secondNumber = Math.floor(Math.random() * 100);
    first.textContent = firstNumber;
    second.textContent = secondNumber;
    para.textContent = "";
    totalInput.value = "";
}

function checkOn() {
    let firstNumber = parseInt(first.textContent);
    let secondNumber = parseInt(second.textContent);
    let total = parseInt(totalInput.value);

    if (firstNumber + secondNumber === total) {
        para.textContent = "You got it right!";
    } else {
        para.textContent = "Check again";
    }
}

// Initialize the game on page load
restartOn();

