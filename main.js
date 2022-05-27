let computerNum = 0;
let goButton = document.getElementById("go-button");
let resetButton = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let userCount = document.getElementById("user-count");
let resultText = document.getElementById("result-text");
let count = 5;
let gameover = false;
let history = [];

goButton.addEventListener("click", go);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {userInput.value="";});


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("correct", computerNum);
}

function go() {
    let value = userInput.value;

    if(value < 1 || value > 100) {
        resultText.textContent = "1과 100사이의 숫자를 입력해주세요."
        return;
    }

    if(history.includes(value)) {
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }
    
    count--;
    userCount.textContent = `남은기회:${count}`
    console.log("count", count);

    if(computerNum > value) {
        resultText.textContent = "Up!!"
    } else if(computerNum < value) {
        resultText.textContent = "Down!!"
    } else {
        resultText.textContent = "Correct!!"
        gameover = true;
    }

    history.push(value);
    console.log(history);

    if(count < 1) {
        gameover = true;
    }

    if(gameover) {
        goButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";

    pickRandomNum()
}

pickRandomNum();

