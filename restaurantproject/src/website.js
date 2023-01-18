import attachHome from "./home";
import attachMenu from "./menu";
import attachContact from "./contact";
import contact from "./contact";

//displaying header with Tabs
function displayHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerTitle =document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.text= "Papa Philip's Pizza Palace";

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
    const menuTab= document.createElement('div');
    menuTab.classList.add('tab-button');
    menuTab.textContent= "Menu";
    menuTab.addEventListener("click",(e) =>{
        if(e.target.classList.contains("active"))return;
        setActive(menuTab);
        attachMenu();
    })
    const contactTab= document.createElement('div');
    contactTab.classList.add('tab-button');
    contactTab.textContent('Contact');
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
        if (buttons !== this){
            button.classList.remove("active");
        }
    });
    buttons.classList.add("active");
}
function displayContent() {
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    mainContent.setAttribute("id","mainContent");
    return mainContent;
}
function initializeSite() {
    const content =document.getElementById("content");

    content.appendChild(displayHeader());
    content.appendChild(displayContent());
    
    setActive(document.querySelector('.tab-button'))
    attachHome();
}
export default initializeSite();