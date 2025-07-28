let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newGame = document.querySelector('.newgame');
let winnerMessage = document.querySelector('.winnermsg');
let messageText = document.querySelector('.message');


let playerX = true;

const checkWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '') {
            const currentPlayer = playerX ? 'X' : 'O';
            box.innerHTML = currentPlayer;
            box.classList.add(currentPlayer.toLowerCase());
            playerX = !playerX;
        }
        checkGame();
    });
});

function checkGame() {  
    for(let pattern of checkWinner) {
        let position1 = boxes[pattern[0]].innerHTML;
        let position2 = boxes[pattern[1]].innerHTML;
        let position3 = boxes[pattern[2]].innerHTML;

        if(position1 != "" && position2 != "" && position3 != "") {
            if(position1 === position2 && position2 === position3) {
                showWinner(position1);
                boxes[pattern[0]].classList.add('w');
                boxes[pattern[1]].classList.add('w');
                boxes[pattern[2]].classList.add('w');
                boxes[pattern[0]].classList.remove('x', 'o');
                boxes[pattern[1]].classList.remove('x', 'o');
                boxes[pattern[2]].classList.remove('x', 'o');
                boxes[pattern[0]].classList.add('scale-in');
                boxes[pattern[1]].classList.add('scale-in');
                boxes[pattern[2]].classList.add('scale-in');
                winnerMessage.classList.remove('hide');
                messageText.innerHTML = `Congratulations! Player ${position1} wins!`;
                boxes.forEach((box) => {        
                    box.removeEventListener('click', () => {});
                });
                return; 
            }
        }

    }
}

function showWinner(winner) {
    messageText.innerHTML = `Congratulations! Player ${winner} wins!`;
    winnerMessage.classList.remove('hide'); 
}

function resetGame() {
    boxes.forEach((box) => {
        box.innerHTML = '';
        box.classList.remove('x', 'o', 'w');
    });
    playerX = true; 
}
   

function newGameHandler() {
    resetGame();
    winnerMessage.classList.add('hide');
}

reset.addEventListener('click', resetGame);
newGame.addEventListener('click', newGameHandler);  


