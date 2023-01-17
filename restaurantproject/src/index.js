import './style.css';
import header from './header.js'
import menuDisplay from './menu';
import contactMenu from './contact';

//image assets
import fry from './fry.jpg';
import doubledouble from './doubledouble.jpg';
import italiansausage from './italiansausage.jpg';
import nuggy from './nuggy.jpg';
import pepperonipie from './pepperonipie.jpg';
import sausagepie from './sausagepie.jpg';
import sausagepie2 from './sausagepie2.jpg';
import wings from './wings.jpg';


console.log('hello')


function homeDisplay() {
    //append content
    const content= document.getElementById('content');
    //homepage

    //header
    const header = document.createElement('div');
    const headertab = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');
    //content
    const homePageContent =document.createElement('div');
    const homeTitleContainer = document.createElement('div');
    const homeTitle =document.createElement('div');
    const homeDescription =document.createElement('div');
    const homeHoursContainer =document.createElement('div');
    const homeHoursTitle = document.createElement('div');
    const homeHours =document.createElement('div');
    //homepage class defined
    //header class
    header.classList.add('header');
    headertab.classList.add('header-tab');
    homeTab.classList.add('home-tab');
    menuTab.classList.add('menu-tab');
    contactTab.classList.add('contact-tab');
    //homepage class
    homePageContent.classList.add('homepage-content');
    homeTitleContainer.classList.add('homepage-title-container');
    homeTitle.classList.add('home-title');
    homeDescription.classList.add('home-description');
    homeHoursContainer.classList.add('home-hours-container');
    homeHours.classList.add('home-hours');
    homeHoursTitle.classList.add('home-hours-title');
    //homepage text
    //header content
    header.innerHTML="Papa Philip's Pizza Palace";
    homeTab.textContent="Home";
    menuTab.textContent="Menu";
    contactTab.textContent="Contact";
    //home content text
    homeTitle.innerHTML="Pizza Palace dedicated to Quality"
    homeDescription.innerHTML="Our Pizza is guaranteed to use the freshest high quality ingredients. Established in 1998 our Pizza was born at my home where I spent many days testing the perfect New York style crust. After several years I have finally decided my work can be open to the public as a passion project. All of our dough and ingredients are guaranteed made fresh in-house and never frozen or premade. Our motto is to make the best damn tasting food people can afford. It has been our tradition and culture to take pride in our work. Instead we want everyone to enjoy the promised work they pay the price for.  If it aint Papa Phil's it ain't gonna be good!"
    homeHoursTitle.innerHTML="Hours";
    homeHours.innerHTML="Thursday: 11am - 11pm\n Friday: 11am - 11pm\n Saturday: 11am - 11pm\nSunday: 11am - 8pm\n Monday: Closed\n Tuesday: Closed\n Wednesday: Closed";
    //homepage appending
    content.appendChild(header);
    header.appendChild(headertab);
    headertab.appendChild(homeTab);
    headertab.appendChild(menuTab);
    headertab.appendChild(contactTab);
    content.appendChild(homePageContent);
    homePageContent.appendChild(homeTitleContainer);
    homeTitleContainer.appendChild(homeTitle);
    homeTitleContainer.appendChild(homeDescription);
    homePageContent.appendChild(homeHoursContainer);
    homeHoursContainer.appendChild(homeHoursTitle);
    homeHoursContainer.appendChild(homeHours);

    return
}
initialPage();

function initialPage () {
    const tabSelection = document.querySelectorAll('#tabContainerDiv');

}
    //menu tab
    const menuPageContent= document.createElement('div');
    const menuPieTitle= document.createElement('div');
    const menuPieList =document.createElement('ul');
    const menuSideTitle= document.createElement('div');
    const menuSideList =document.createElement('ul');
    const menuDrinkTitle = document.createElement('div');
    const menuDrinkList = document.createElement('ul');
    //contact tab
    const contactPageContent= document.createAttribute('div');
    const contactTitle= document.createElement('div');
    const contactList = document.createElement('ul');
   


