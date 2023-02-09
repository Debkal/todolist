import fry from './pics/fry.jpg';
import doubledouble from './pics/doubledouble.jpg';
import italiansausage from './pics/italiansausage.jpg';
import nuggy from './pics/nuggy.jpg';
import pepperonipie from './pics/pepperonipie.jpg';
import SausagePie from './pics/sausagepie.jpg';
import sausagepie2 from './pics/sausagepie2.jpg';
import wings from './pics/wings.jpg';

function menuDisplay() {

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    menuContent.appendChild(menuItem(
        "SausagePie",SausagePie,
        "Handcrafted 14inch sausage pie made with our signature NYC crust and tomatoe sauce!",'18.99',
    ));
    menuContent.appendChild(menuItem(
        "PepperoniPie",pepperonipie,
        "Handcrafted 14inch pepperoni pie made with our signature NYC crust and sauce","18.99"
    ));
    menuContent.appendChild(menuItem(
        "DoubleDouble",doubledouble,
        "Handcrafted Bun with 2 Chuck/Sirloin beef patties. Also comes with Housemade Mayo, Pickles, Cherry Tomatoes, and American Cheese.",
        "14.49"
    ));
    menuContent.appendChild(menuItem(
        "Wings",wings,"House made wings with your choice of Golden Crispy, Buffalo Parmesan, and Korean Sweet and Spicy Gochujang",
        "9.99 for 6, 14.99 for 10, 25.99 for 18"
    ));
    menuContent.appendChild(menuItem(
        "French Fry",fry,"House made french fries, Fried to Order!","4.99"
    ));
    menuContent.appendChild(menuItem(
        "Chicken Nuggets",nuggy,"House made Chicken Nuggets, Fried to Order!", "7.99"
    ));
    menuContent.appendChild(menuItem(
        "Italian Sausage & Peppers", italiansausage,"House made Italian sausage with Sweet and Tangy Peppers", "9.99"
    ));
    return menuContent;
}

function menuItem(name,image,description,price){
    //retrieving menu items to display
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuFoodName = document.createElement("div");
    menuFoodName.classList.add("menu-food-name");
    menuFoodName.textContent= name;

    const menuFoodDescription = document.createElement("p");
    menuFoodDescription.textContent= description;

    const menuFoodImage = document.createElement("img");
    menuFoodImage.classList.add(`menu-image`);
    menuFoodImage.src=image;
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