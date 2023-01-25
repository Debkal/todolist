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

function menuItem(name,description,price){
    //retrieving menu items to display
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuFoodName = document.createElement("div");
    menuFoodName.textContent= name;

    const menuFoodDescription = document.createElement("p");
    menuFoodDescription.textContent= description;

    const menuFoodImage = document.createElement("img");
    menuFoodImage.classList.add(`${name-price}`);
    menuFoodImage.src=name;
    menuFoodImage.alt=name;

    const menuFoodPrice =document.createElement("div");
    menuFoodPrice.textContent=price;

    menuItem.appendChild(menuFoodName);
    menuItem.appendChild(menuFoodImage);
    menuItem.appendChild(menuFoodPrice);
    menuItem.appendChild(menuFoodDescription);

    return menuItem;

}


function attachMenu() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(menuDisplay());
}
export default attachMenu;