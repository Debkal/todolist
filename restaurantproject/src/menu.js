import fry from './pics/fry.jpg';
import doubledouble from './pics/doubledouble.jpg';
import italiansausage from './pics/italiansausage.jpg';
import nuggy from './pics/nuggy.jpg';
import pepperonipie from './pics/pepperonipie.jpg';
import sausagepie from './pics/sausagepie.jpg';
import sausagepie2 from './pics/sausagepie2.jpg';
import wings from './pics/wings.jpg';

function menuDisplay() {

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    return menuContent;
}

function attachMenu() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(menuDisplay());
}
export default attachMenu;