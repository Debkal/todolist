const gameBoard = (() => {
    let boardSpot= new Array(9);

    const getSpot = (num) => boardSpot[num];

    const setSpot = (num, player) => {
        const htmlSpot = document.querySelector('#gameBoardContainer:nth-child(${num + 1})p');
        htmlSpot.classList.add('puff-in-center')
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
    this.type= type;


    const getType = () => {
        return type;
    }
    const setType = (type,active) => {
        type= type;
        let selected= document.querySelector('.btnp');
        if(active){
            selected.classList.add('selected');
            selected.classList.remove('not-selected');
        }
        else{
            selected.classList.remove('selected');
            selected.classList.add('not-selected');
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

    const changePlayerType = (type) => {
        gameController.changeType(type);
    }
    

    spotElements.forEach((spot)) =>
        spot.addEventListener("click", (e)) => {
            if()
        }
}

const gameController = (() => {
    const player = Player('X');
    const computer = Player('O');

    const changeType = (type) => {
        if (type == 'X'){
            player.setType('X',true);
            computer.setType('O');
        }
        else if(type== 'O'){
            player.setType('O',true);
            computer.setType('X');
        }
        else throw 'Incorrect sign';
    }

}