import gameboard from "./gameboard.js";

const _DOM = (() =>
{
    const board1 = document.querySelector(".b1");
    const board2 = document.querySelector(".b2");

    return {
        board1,
        board2,
    }
})();


const renderBoard = () => {

    for (let i = 0; i < 10; i++) 
    {
        let newBoard1Row = document.createElement("div");
        newBoard1Row.classList.add("boardRow");
        _DOM.board1.appendChild(newBoard1Row);
    
        let newBoard2Row = document.createElement("div");
        newBoard2Row.classList.add("boardRow");
        _DOM.board2.appendChild(newBoard2Row);
    
        for (let j = 0; j < 10; j++) 
        {
            let newBoard1Cell = document.createElement("button");
            newBoard1Cell.classList.add("boardCell");
            newBoard1Row.appendChild(newBoard1Cell);
    
            let newBoard2Cell = document.createElement("button");
            newBoard2Cell.classList.add("boardCell");
            newBoard2Row.appendChild(newBoard2Cell);
        }
    }
}




// Initilization
renderBoard();
