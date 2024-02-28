let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newgameBtn = document.querySelector('#newbtn');
let mesgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 =true; // playerx,playero
let count =0;
const winningpattrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 =true;
    count = 0;
    enableBoxes();
    mesgcontainer.classList.add('hide');
}

boxes. forEach ((box) => {
    box.addEventListener('click', () => {
        if(turn0 === true){
            box.innerText = 'O';
            turn0=false;
        }
        else{
            box.innerText ='X';
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner();

        let iswinner = checkWinner();

        if(count === 9 && !iswinner){
            gameover();
        }
    });
});

const gameover = () => {
    msg.innerText=`Game was a tie`;
    mesgcontainer.classList.remove("hide");
     disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    mesgcontainer.classList.remove("hide");
     disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winningpattrn){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" &&  pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            }
        }
    }
};

newgameBtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);

