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

    return {
        changeType
    }
})();