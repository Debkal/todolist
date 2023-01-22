import './style.css';
import attachHome from "./home";
import attachMenu from "./menu";
import attachContact from "./contact";


//displaying header with Tabs
function displayHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerTitle =document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent= "Papa Philip's Pizza Palace";

    header.appendChild(headerTitle);
    header.appendChild(displayTab());

    return header;

}
//tab logic for switching pages upon click
function displayTab() {
    const headerTab =  document.createElement('div');
    headerTab.classList.add('header-tab');

    const homeTab= document.createElement("button");
    homeTab.classList.add('tab-button');
    homeTab.textContent ="Home";
    homeTab.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))return;
        setActive(homeTab);
        attachHome();
    })
    const menuTab= document.createElement('button');
    menuTab.classList.add('tab-button');
    menuTab.textContent= "Menu";
    menuTab.addEventListener("click",(e) =>{
        if(e.target.classList.contains("active"))return;
        setActive(menuTab);
        attachMenu();
    })
    const contactTab= document.createElement('button');
    contactTab.classList.add('tab-button');
    contactTab.textContent='Contact';
    contactTab.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))return;
        setActive(contactTab);
        attachContact();
    })
    //appending tabs
    headerTab.appendChild(homeTab);
    headerTab.appendChild(menuTab);
    headerTab.appendChild(contactTab);

    return headerTab;
}
//upon click tab button class change to active
function setActive(button) {
    const buttons = document.querySelectorAll(".tab-button")

    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}
function displayContent() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.id ="main";
    return main;
}
function displayFooter() {
    const d=new Date();

    const footer=document.createElement("footer");
    footer.classList.add("footer");

    const devNote = document.createElement("p");
    devNote.textContent= `Developed by Debkal ${d.getFullYear()}`;

    const gitLink =document.createElement("a");
    gitLink.href= "https://github.com/Debkal"

    footer.appendChild(devNote);
    footer.appendChild(gitLink);

    return footer;
}
function initializeSite() {

    const content =document.getElementById("content");

    
    content.appendChild(displayHeader());
    content.appendChild(displayContent());
    content.appendChild(displayFooter());
    
    setActive(document.querySelector('.tab-button'))
    attachHome();
}

initializeSite();