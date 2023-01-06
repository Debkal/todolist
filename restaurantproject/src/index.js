import './style.css';

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


function display() {
    //append content
    const content= document.getElementById('content');
    //homepage
    const header = document.createElement('div');
    const headertab = document.createElement('div');
    const homePageContent =document.createElement('div');
    const homeTitle =document.createElement('div');
    const homeDescription =document.createElement('div');
    const homeHours =document.createElement('div');
    const homeLocation =document.createElement('div');
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
    //class defined
    header.classList.add('header');
    headertab.classList.add('header-tab');
    homePageContent.classList.add('homepage-content');
    homeTitle.classList.add('home-title');
    homeDescription.classList.add('home-description');
    homeHours.classList.add('home-hours');
    homeLocation.classList.add('home-location');
}

