//숫자가 임의로 정해진다. ok
//숫자를 입력한다. ok
//고 버튼을 클릭다. ok
//업,다운,맞춤 결과표시가 나온다. ok
//남은 기회가 몇번인지 보여준다. ok
//기회가 다 떨어지면 고버튼을 클릭하지 못한다. ok
//성공하면 고버튼을 클릭하지 못한다. ok
//리셋 버튼을 클릭한다다. ok
//숫자가 지워진다. ok
//인풋영역에 마우스를 대고 클릭하면 숫자가 지워진다. ok

let random = 0;
let inputNumber = document.getElementById("input-number");
let goButton = document.getElementById("go-button");
let resetButton = document.getElementById("reset-button");
let resultText = document.getElementById("result-text");
let countNumber = document.getElementById("count-number");
let count = 10;
let gameover = false;
let history = [];

goButton.addEventListener("click", go);
resetButton.addEventListener("click", reset);
inputNumber.addEventListener("focus", function() {inputNumber.value = "";});

function pickRandomNum() {
    random = Math.floor(Math.random()*100) + 1;
    console.log("random:",random);
}

function go() {
    let inputValue = inputNumber.value;

    if(inputValue < 1 || inputValue > 100) {
        resultText.textContent = "1과 100사이의 숫자를 입력해주세요.";
        return;
    }

    if(history.includes(inputValue)) {
        resultText.textContent = "이미 입력한 숫자입니다.";
        return;
    }

    count--;
    countNumber.textContent = `count : ${count}`;

    if(inputValue < random) {
        resultText.textContent = "UP!!";
    } else if(inputValue > random) {
        resultText.textContent = "DOWN!!";
    } else {
        resultText.textContent = "CORRECT!!";
        gameover = true;
    }

    history.push(inputValue);
    console.log(history);

    
    if(count < 1) {
        gameover = true;
    } 

    if(gameover) {
        goButton.disabled = true;
        resultText.textContent = "THE END";
    }
}

function reset() {
    inputNumber.value = "";

    count = 10;
    history = [];
    gameover = false;
    goButton.disabled = false;
    countNumber.textContent = `count : ${count}`;
    resultText.textContent = "RESET";
    pickRandomNum();
}

pickRandomNum();