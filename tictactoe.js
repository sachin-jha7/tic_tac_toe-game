let winMusic = new Audio("maza-aaya-rahul-gandhi-meme2.mp3");
let container = document.querySelector(".container");
let gameInfo = document.querySelector(".option");
let line = document.querySelector(".line");
let info = document.querySelector(".info");
let turns = "X";
let allBtn = document.querySelectorAll(".btn");

// ***  PLAY WITH FRIEND  ***

// PLAY WITH FRIEND BTN
let isMove = true;      //FALSE WHEN ONE WINS
let playBtn1 = document.querySelector(".playBtn1");
playBtn1.addEventListener("click", function () {
    vanishMainBtn(this);
    isMove = true;
    turns = "X";
});
let notice = document.querySelector(".smallScreen");
if(window.innerWidth > window.innerHeight) {
    playBtn1.style.opacity = "1";
    notice.style.opacity = "0";
}
if (window.innerWidth < 768) {
    notice.style.opacity = "1";
    playBtn1.style.opacity = "0";
    //console.log("please Rotate your phone");
}
// BUTTON TOGGLE & CLICK
for (let btn of allBtn) {
    btn.addEventListener("click", function () {
        btn.querySelector("p").innerText = turns;
        checkWin(turns);
        if (isMove) {
            if (turns === "X") {
                turns = "O";
                gameInfo.innerText = `Turn for :- ${turns}`;
            }
            else if (turns === "O") {
                turns = "X"
                gameInfo.innerText = `Turn for :- ${turns}`;
            }
        }
    });
}

 //NAVIGATION BTN FUNCTION
let vanishMainBtn = function (t) {
    container.style.opacity = "1";
    container.style.width = "21.9vw";
    container.style.height = "21.8vw";
    t.style.opacity = "0";
    t.style.width = "0";
    t.style.height = "0";
    info.style.opacity = "1";
}
//  BTNS TO CHECK

btn1 = document.getElementById("1");
btn2 = document.getElementById("2");
btn3 = document.getElementById("3");
btn4 = document.getElementById("4");
btn5 = document.getElementById("5");
btn6 = document.getElementById("6");
btn7 = document.getElementById("7");
btn8 = document.getElementById("8");
btn9 = document.getElementById("9");

// QUIT BUTTON
let backBtn = document.querySelector(".quit");
backBtn.addEventListener("click", function () {
    container.style.width = "0";
    container.style.height = "0";
    container.style.opacity = "0";
    container.style.transition = "opacity 0s ease-in-out";
    playBtn1.style.opacity = "1";
    playBtn1.style.width = "5vw";
    playBtn1.style.height = "2vw";
    turns = "X";
    info.style.opacity = "0";
    for (let btn of allBtn) {
        btn.querySelector("p").innerText = "";
    }
    line.style.width = "0";
    gameInfo.innerText = `Turn for :- ${turns}`;
    winImg.style.opacity = "0";
    winImg.style.left = "0";
    winImg.style.top = "10%";
});

// MOVE WIN-IMG
let winImg = document.querySelector(".winImg");
let moveImg = function () {
    winImg.style.opacity = "1";
    winImg.style.left = "70vw";
    winImg.style.top = "15vw";
}

// RESET BUTTON
let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
    for (let btn of allBtn) {
        btn.querySelector("p").innerText = "";
    }
    isMove = true;
    turns = "X";
    gameInfo.innerText = `Turn for :- ${turns}`;
    winImg.style.opacity = "0";
    winImg.style.left = "0";
    winImg.style.top = "10%";
    line.style.width = "0";
});

// CHECK FOR WIN
let i = 0;
let checkWin = function (t) {
    if ((btn1.querySelector("p").innerText === btn2.querySelector("p").innerText) &&
     (btn2.querySelector("p").innerText === btn3.querySelector("p").innerText ) &&
        (btn1.querySelector("p").innerText !== "")) {
        i = 1;
        isMove = false;    // IF ANY-ONE WINS THEN BUTTON TOGGLE STOPS
        result(t);
    }
    else if ((btn4.querySelector("p").innerText === btn5.querySelector("p").innerText) &&
     (btn5.querySelector("p").innerText === btn6.querySelector("p").innerText) &&
        (btn4.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 2;
        result(t);
    }
    else if ((btn7.querySelector("p").innerText === btn8.querySelector("p").innerText) &&
     (btn8.querySelector("p").innerText === btn9.querySelector("p").innerText) &&
        (btn7.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 3;
        result(t);
    }
    else if ((btn1.querySelector("p").innerText === btn4.querySelector("p").innerText) &&
     (btn4.querySelector("p").innerText === btn7.querySelector("p").innerText) &&
        (btn7.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 4;
        result(t);
    }
    else if ((btn2.querySelector("p").innerText === btn5.querySelector("p").innerText) &&
     (btn5.querySelector("p").innerText === btn8.querySelector("p").innerText) &&
        (btn8.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 5;
        result(t);
    }
    else if ((btn3.querySelector("p").innerText === btn6.querySelector("p").innerText) && 
    (btn6.querySelector("p").innerText === btn9.querySelector("p").innerText) &&
        (btn9.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 6;
        result(t);
    }
    else if ((btn7.querySelector("p").innerText === btn5.querySelector("p").innerText) && 
     (btn5.querySelector("p").innerText === btn3.querySelector("p").innerText) &&
        (btn5.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 7;
        result(t);
    }
    else if ((btn9.querySelector("p").innerText === btn5.querySelector("p").innerText) && 
    (btn5.querySelector("p").innerText === btn1.querySelector("p").innerText) &&
        (btn9.querySelector("p").innerText !== "")) {
        isMove = false;
        i = 8;
        result(t);
    }
    else if ((btn1.querySelector("p").innerText !== "") && (btn2.querySelector("p").innerText !== "") &&
        (btn3.querySelector("p").innerText !== "") && (btn4.querySelector("p").innerText !== "") &&
        (btn5.querySelector("p").innerText !== "") && (btn6.querySelector("p").innerText !== "") &&
        (btn7.querySelector("p").innerText !== "") && (btn8.querySelector("p").innerText !== "") &&
        (btn9.querySelector("p").innerText !== "")) {
        isMove = false;
        k = 2;
        gameInfo.innerHTML = `DRAW!`;
    }
}

// SHOW RESULT WITH ANIMATION
let result = function (m) {
    if (i == 1) {
        line.style.width = "21vw";
        line.style.top = "12.5%";
        line.style.left = "2%";
        line.style.transform = "rotate(180deg)";
        gameInfo.innerHTML = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 2) {
        line.style.width = "21vw";
        line.style.top = "46%";
        line.style.left = "1%";
        line.style.transform = "rotate(180deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 3) {
        line.style.width = "21vw";
        line.style.top = "80.5%";
        line.style.left = "2%";
        line.style.transform = "rotate(180deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 4) {
        line.style.width = "21vw";
        line.style.top = "49%";
        line.style.left = "-32%";
        line.style.transform = "rotate(90deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 5) {
        line.style.width = "21vw";
        line.style.top = "49%";
        line.style.left = "1.75%";
        line.style.transform = "rotate(90deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 6) {
        line.style.width = "21vw";
        line.style.top = "49%";
        line.style.left = "35.8%";
        line.style.transform = "rotate(90deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 7) {
        line.style.width = "25vw";
        line.style.top = "49%";
        line.style.left = "-9%";
        line.style.transform = "rotate(-45deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
    if (i == 8) {
        line.style.width = "25vw";
        line.style.top = "49%";
        line.style.left = "-9%";
        line.style.transform = "rotate(45deg)";
        gameInfo.innerText = `${m} WINs`;
        moveImg();
        winMusic.play();
    }
}
