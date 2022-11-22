const gameBoard = (() => {
    let boardSpot= new Array(9);

    const getSpot = (num) => boardSpot[num];

    const setSpot = (num, player) => {
        const htmlSpot = document.querySelector('#gameBoardContainer button:nth-child(${num + 1})p');
        htmlSpot.classList.add('puff-in-center')
        htmlSpot.textContent = player.getType();
        boardSpot[num] = player.getType();
    }
    const aiSetSpot = (num,player) => {
        if(player == undefined) {
            boardSpot[num]=undefined;
            return;
        }
        boardSpot= player.getCompType();
    }
    const getEmptySpot = () => {
        spots=[];
        for(let i =0; i< boardSpot.length;i++){
            const spot=boardSpot[i]
            if(spot==undefined){
                spots.push(i);
            }
        }
        return spots;
    }
    const clearSpot = () => {
        for(let i =0;i< boardSpot.legnth;i++){
            boardSpot[i]= undefined;
        }
    }
    return {
        getSpot,
        setSpot,
        aiSetSpot,
        getEmptySpot,
        clearSpot
    }
})();

const Player = (type) => {
    let _type= type;


    const getType = () => {
        return type;
    }
    const setType = (type,active) => {
        _type= type;
        const p= document.querySelector(`.btn-p.${type.toLowerCase()}`);
        if(active){
            p.classList.add('selected');
            p.classList.remove('not-selected');
        }
        else{
            p.classList.remove('selected');
            p.classList.add('not-selected');
        }
    }
    return {getType,setType};
};
const Computer = (type) => {
    this.type=type;
    
    const getCompType = () => {
        return type;
    }
    return {getCompType};
};
const displayController = (() => {
    const spotElements = document.querySelectorAll(".spot");
    const btnRestart= document.getElementById('btnRestart');
    const playerWin= document.getElementById('player');
    const computerWin= document.getElementById('computer');
    const playerX = document.getElementById('btnX');
    const playerO = document.getElementById('btnO');
    const btnGrp= document.getElementById('btnGrp');

    const changePlayertype = (type) => {
        gameController.changeType(type);
    }

    playerX.addEventListener('click', changePlayertype.bind(this,'X'));
    playerO.addEventListener('click', changePlayertype.bind(this,'O'));
})();


const gameController = (() => {
    const player = Player('X');
    const computer = Player('O');

    const getPlayer = () => player;
    const getComputer = () => computer;

    const changeType = (type) => {
        if (type == 'X'){
            player.setType('X',true);
            computer.setType('O');
        }
        else if(type== 'O'){
            player.setType('O',true);
            computer.setType('X');
        }
        else throw 'Incorrect type';
    }
    const checkRow = (board) => {
        for(let i=0; i < 3; i++) {
            let row= []
            for(let j=i*3;j<i*3+3; j++){
                row.push(board.getSpot(j));
            }
            if(row.every(spot => spot =='X')|| row.every(spot=> spot== 'O')){
                return true;
            }
        }
        return false;
    }
    const checkColumn = (board) => {
        for(let i=0;i<3;i++){
            let column=[]
            for(let j= 0;j<3;j++){
                column.push(board.getSpot(i+3*j));
            }
            if(column.every(spot => spot=='X')|| column.every(spot=> spot=='O')){
                return true;
            }
        }
        return false;
    }
    const checkDiagonals =(board)=> {
        diagonal1 =[board.getSpot(0),board.getSpot(4), board.getSpot(8)];
        diagonal2 =[board.getSpot(6),board.getSpot(4), board.getSpot(2)];
        if(diagonal1.every(spot=> spot == 'X')||diagonal2.every(spot=> spot =='O')){
            return true;
        }
        else if(diagonal2.every(spot => spot =='X') || diagonal2.every(spot => spot == 'O')){
            return true;
        }
    }
    const checkWin = (board) => {
        if(checkRow(board)||checkColumn(board)||checkDiagonals(board)){
            return true;
        }
        return false;
    }
    const checkDraw = (board) => {
        if(checkWin(board)){
            return false;
        }
        for(let i=0; i<9;i++){
            const spot= board.getSpot(i);
            if(spot == undefined){
                return false;
            }
        }
        return true;
    }
    const endGame = function(type) {
        const card =document.getElementById('card');
        card.classList.remove('unblur');
        card.classList.add('blur');

        playerWin= document.getElementById('player');
        computerWin= document.getElementById('computer');
        draw=document.getElementById('draw');

        if (type=='Draw'){
            draw.classList.remove('hide');
            console.log('draw');
        }
        else {
            if(type.toLowerCase() == player.getType()){
                playerWin.classList.remove('hide');
            }
            else{
                computerWin.classList.remove('high');
            }
        }

    }
    const playerStep = (num) => {
        const spot =gameBoard.getSpot(num);
        if(spot == undefined) {
            gameBoard.setSpot(num,player);
            if(checkWin(gameBoard)) {
                endGame(player.getType());
            }
            else if (checkDraw(gameBoard)){
            endGame("Draw");
            }
            else {
                displayController
            }
        }
        else{
        console.log('already filled!!');
        }
    }
    return {
        changeType,
        getPlayer,
        getComputer,
        checkWin,
        checkDraw,
        playerStep,
        endGame
    }

})();