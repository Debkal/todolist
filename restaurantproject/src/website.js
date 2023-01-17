import attachHome from "./home";

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
}

function setActive(button) {
    const buttons = document.querySelectorAll(".tab-button")

    buttons.forEach((button) => {
        if (buttons !== this){
            button.classList.remove("active");
        }
    });
    buttons.classList.add("active");
}