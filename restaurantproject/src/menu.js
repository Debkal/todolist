import fry from './fry.jpg';
import doubledouble from './doubledouble.jpg';
import italiansausage from './italiansausage.jpg';
import nuggy from './nuggy.jpg';
import pepperonipie from './pepperonipie.jpg';
import sausagepie from './sausagepie.jpg';
import sausagepie2 from './sausagepie2.jpg';
import wings from './wings.jpg';

function menuDisplay() {

    const menuContent = document.createElement("div");

    return menuContent;
}

function attachMenu() {
    const pageContent = document.getElementById("pageContent");
    pageContent.textContent= "";
    pageContent.appendChild(menuDisplay());
}

export default attachMenu();