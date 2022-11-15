const gameBoard = (() => {
    let boardSpot= new Array(9);

    const getSpot = (num) => boardSpot[num];

    const setSpot = (num, player) => {
        const htmlSpot = document.querySelector('#gameBoardContainer:nth-child(${num + 1})p');

    }

})();

const Player = (type) => {
    this.type= type;

    const getType = () => {
        return type;
    }
    return {getType};
};