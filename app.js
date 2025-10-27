let allBtn = document.querySelectorAll(".box");

let turn; let isX_turn = false, isO_turn = false;
let turnText = document.querySelector(".turn");
turnText.style.display = "none";
let X_btn = document.querySelector(".X-btn");
let O_btn = document.querySelector(".O-btn");
let X_score = 0, O_score = 0;


X_btn.addEventListener("click", () => {
    X_btn.style.boxShadow = "0px 0px 25px limegreen";
    O_btn.style.boxShadow = "0px 0px 0px limegreen";
    turn = "X";
    turnText.innerText = `Turn for: ${turn}`;
    turnText.style.display = "block";
    isX_turn = true;
    isO_turn = false;
}, { once: true });

O_btn.addEventListener("click", () => {
    O_btn.style.boxShadow = "0px 0px 25px limegreen";
    X_btn.style.boxShadow = "0px 0px 0px limegreen";
    turn = "O";
    turnText.innerText = `Turn for: ${turn}`;
    turnText.style.display = "block";
    isX_turn = false;
    isO_turn = true;
}, { once: true });



for (let btn of allBtn) {
    btn.addEventListener("click", () => {
        btn.style.backgroundColor = "cornflowerblue";
        setTimeout(() => {
            btn.style.backgroundColor = "transparent";
        }, 250);
        if (turn == "X") {
            btn.innerText = "X";
            turn = "O";
            setTimeout(() => {
                turnText.innerText = `Turn for: ${turn}`;
                X_btn.style.boxShadow = "0px 0px 0px limegreen";
                O_btn.style.boxShadow = "0px 0px 25px limegreen";
            }, 200);
            checkWin();
        } else if (turn == "O") {
            btn.innerText = "O";
            turn = "X";
            setTimeout(() => {
                turnText.innerText = `Turn for: ${turn}`;
                O_btn.style.boxShadow = "0px 0px 0px limegreen";
                X_btn.style.boxShadow = "0px 0px 25px limegreen";
            }, 200);
            checkWin();
        }
    });
};

let container = document.querySelector(".container");
let resultBox = document.querySelector(".result");
let resultText = document.querySelector(".result-text");

let restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", () => {
    restartBtn.style.transform = "translateY(2px)";
    X_btn.innerText = `X - ${X_score}`;
    O_btn.innerText = `O - ${O_score}`;

    setTimeout(() => {
        container.style.display = "flex";
        resultBox.style.display = "none";
        X_btn.style.display = "block";
        O_btn.style.display = "block";
        turnText.style.display = "block";
        if (isX_turn) {
            O_btn.style.boxShadow = "0px 0px 0px limegreen";
            X_btn.style.boxShadow = "0px 0px 25px limegreen";
            turnText.innerText = "Turn for: X";
            turn = "X";
        } else if (isO_turn) {
            O_btn.style.boxShadow = "0px 0px 25px limegreen";
            X_btn.style.boxShadow = "0px 0px 0px limegreen";
            turnText.innerText = "Turn for: O";
            turn = "O";
        }
    }, 250);
    container.style.marginTop = "80px";
    line.style.display = "inline-block";
    line.style.height = "0px";
    for (let btn of allBtn) {
        btn.innerText = "";
        btn.style.height = "114.7px";
        btn.style.width = "114.7px";
    }
});

let is_X_win = false, is_O_win = false;

const showWinner = () => {
    if (is_X_win) {
        container.style.justifyContent = "center";
        setTimeout(() => {
            container.style.marginTop = "110px";
            line.style.left = "171px";
            line.style.height = "0px";
            for (let btn of allBtn) {
                btn.style.height = "0px";
                btn.style.width = "0px";
            }
        }, 1000);
        setTimeout(() => {
            turnText.style.display = "none";
            X_btn.style.display = "none";
            O_btn.style.display = "none";
            container.style.display = "none";
            resultBox.style.display = "inline-block";
        }, 1500);
        resultText.innerHTML = `<span style="color:red;">X</span><br><span style="font-size:30px;">WINNER!</span>`;
        is_X_win = false;
    } else if (is_O_win) {
        container.style.justifyContent = "center";
        setTimeout(() => {
            line.style.left = "171px";
            line.style.height = "0px";
            container.style.marginTop = "110px";
            for (let btn of allBtn) {
                btn.style.height = "0px";
                btn.style.width = "0px";
            }
        }, 1000);
        setTimeout(() => {
            turnText.style.display = "none";
            X_btn.style.display = "none";
            O_btn.style.display = "none";
            container.style.display = "none";
            resultBox.style.display = "inline-block";
        }, 1500);
        resultText.innerHTML = `<span style="color:red;">O</span><br><span style="font-size:30px;">WINNER!</span>`;
        is_O_win = false;
    } else {
        container.style.justifyContent = "center";
        setTimeout(() => {
            container.style.marginTop = "110px";
            for (let btn of allBtn) {
                btn.style.height = "0px";
                btn.style.width = "0px";
            }
        }, 1000);
        setTimeout(() => {
            turnText.style.display = "none";
            X_btn.style.display = "none";
            O_btn.style.display = "none";
            container.style.display = "none";
            resultBox.style.display = "inline-block";
        }, 1500);
        resultText.innerHTML = `<span style="color:red;">X O</span><br><span style="font-size:30px;">DRAW!</span>`;
    }
}

let line = document.querySelector(".line");

let top_win = false, top_mid_win = false, top_down_win = false;
let left_win = false, mid_win = false, right_win = false;
let left_corner_win = false, right_corner_win = false;

const addLineToWinPlace = () => {

    if (top_win) {
        line.style.opacity = "1";
        line.style.height = "350px";
        line.style.transform = "rotate(90deg)";
        line.style.left = "171px";
        line.style.top = "-117px";
        top_win = false;
    } else if (top_mid_win) {
        line.style.opacity = "1";
        line.style.height = "350px";
        line.style.transform = "rotate(90deg)";
        line.style.top = "-2px";
        line.style.left = "171px";
        top_mid_win = false;
    } else if (top_down_win) {
        line.style.opacity = "1";
        line.style.height = "350px";
        line.style.transform = "rotate(90deg)";
        line.style.left = "171px";
        line.style.top = "115px";
        top_down_win = false;
    } else if (left_win) {
        line.style.opacity = "1";
        line.style.height = "350px";
        line.style.transform = "rotate(0deg)";
        line.style.left = "55px";
        line.style.top = "0px";
        left_win = false;
        // console.log("everything is fine");
    } else if (mid_win) {
        line.style.opacity = "1";
        line.style.height = "350px";
        line.style.transform = "rotate(0deg)";
        line.style.left = "171.5px";
        line.style.top = "0px";
        mid_win = false;
    } else if (right_win) {
        line.style.opacity = "1";
        line.style.height = "350px";
        line.style.transform = "rotate(0deg)";
        line.style.left = "288.5px";
        line.style.top = "0px";
        mid_win = false;
    } else if (left_corner_win) {
        line.style.opacity = "1";
        line.style.height = "390px";
        line.style.transform = "rotate(-45deg)";
        line.style.top = "-22px";
        left_corner_win = false;
    } else if (right_corner_win) {
        line.style.opacity = "1";
        line.style.height = "390px";
        line.style.transform = "rotate(45deg)";
        line.style.top = "-21px";
        right_corner_win = false;
    }
}


let btn1 = document.querySelector("#box1");
let btn2 = document.querySelector("#box2");
let btn3 = document.querySelector("#box3");
let btn4 = document.querySelector("#box4");
let btn5 = document.querySelector("#box5");
let btn6 = document.querySelector("#box6");
let btn7 = document.querySelector("#box7");
let btn8 = document.querySelector("#box8");
let btn9 = document.querySelector("#box9");

const showSequence = () => {
    addLineToWinPlace();
    showWinner();
}

const takeTimeToShow = (value) => {
    setTimeout(() => {
        turnText.innerHTML = `<h3>${value} &nbsp; wins</h3>`;
    }, 200);
}

const checkWin = () => {

    // VERTICAL CHECK

    if (btn1.innerText === btn2.innerText && btn2.innerText === btn3.innerText && btn1.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        left_win = true;
        showSequence();
    } else if (btn1.innerText === btn2.innerText && btn2.innerText === btn3.innerText && btn1.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        left_win = true;
        showSequence();
    } else if (btn4.innerText === btn5.innerText && btn5.innerText === btn6.innerText && btn4.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        mid_win = true;
        showSequence();
    } else if (btn4.innerText === btn5.innerText && btn5.innerText === btn6.innerText && btn4.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        mid_win = true;
        showSequence();
    } else if (btn7.innerText === btn8.innerText && btn8.innerText === btn9.innerText && btn7.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        right_win = true;
        showSequence();
    } else if (btn7.innerText === btn8.innerText && btn8.innerText === btn9.innerText && btn7.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        right_win = true;
        showSequence();
    }

    // HORIZONTAL CHECK

    else if (btn1.innerText === btn4.innerText && btn4.innerText === btn7.innerText && btn1.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        top_win = true;
        showSequence();
    } else if (btn1.innerText === btn4.innerText && btn4.innerText === btn7.innerText && btn1.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        top_win = true;
        showSequence();
    } else if (btn2.innerText === btn5.innerText && btn5.innerText === btn8.innerText && btn2.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        top_mid_win = true;
        showSequence();
    } else if (btn2.innerText === btn5.innerText && btn5.innerText === btn8.innerText && btn2.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        top_mid_win = true;
        showSequence();
    } else if (btn3.innerText === btn6.innerText && btn6.innerText === btn9.innerText && btn3.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        top_down_win = true;
        showSequence();
    } else if (btn3.innerText === btn6.innerText && btn6.innerText === btn9.innerText && btn3.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        top_down_win = true;
        showSequence();
    }

    // DIAGONAL CHECK

    else if (btn1.innerText === btn5.innerText && btn5.innerText === btn9.innerText && btn1.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        left_corner_win = true;
        showSequence();
    } else if (btn1.innerText === btn5.innerText && btn5.innerText === btn9.innerText && btn1.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        left_corner_win = true;
        showSequence();
    } else if (btn3.innerText === btn5.innerText && btn5.innerText === btn7.innerText && btn3.innerText === "X") {
        takeTimeToShow("X");
        X_score++;
        is_X_win = true;
        right_corner_win = true;
        showSequence();
    } else if (btn3.innerText === btn5.innerText && btn5.innerText === btn7.innerText && btn3.innerText === "O") {
        takeTimeToShow("O");
        O_score++;
        is_O_win = true;
        right_corner_win = true;
        showSequence();
    }

    // DRAW

    else if (btn1.innerText != "" && btn2.innerText != "" && btn3.innerText != "" && btn4.innerText != "" && btn5.innerText != "" && btn6.innerText != "" && btn7.innerText != "" && btn8.innerText != "" && btn9.innerText != "") {
        setTimeout(() => {
            turnText.innerHTML = `<h3>X O &nbsp; DRAW!</h3>`;
        }, 200);
        showWinner();
    }
}
