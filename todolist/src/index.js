import './style.css';
// header dom
function displayHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerTitle =document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "TooDoo"

    const headerLogo = document.createElement("div");
    headerLogo.classList.add("header-logo");

    header.appendChild(headerLogo);
    headerLogo.appendChild(headerTitle);
    
    return header;
}
// main display dom
function displayMain(){
    const main=document.createElement("main");
    main.classList.add("main");
    main.id= "main";
    return main;
}
//footer dom
function displayFooter(){
    const d=new Date();

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerNote = document.createElement("p");
    footerNote.textContent = `Developed by Debkal ${d.getFullYear()}`;

    const gitLink = document.createElement("a");
    gitLink.href="https://github.com/Debkal";

    footer.appendChild(footerNote);
    footer.appendChild(gitLink);

    return footer;
}
//set button active
function setNavActive(button) {
    const buttons= document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}
function setTaskActive(button) {
    const buttons= document.querySelectorAll(".add-task");
    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}
//nav dom
function displayNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.id="nav";

    nav.appendChild(displayTasks);
    nav.appendChild(displayProject);
    return nav;
}
function displayTasks(){
    const taskSection = document.createElement("div");
    taskSection.classList.add("toodoo-section");

    const tooDooTab = document.createElement("button");
    tooDooTab.classList.add("nav-button");
    tooDooTab.textContent="Set Task";
    tooDooTab.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))return;
        setNavActive(tooDooTab);
        displayTaskContent();
    })
    const todayTab = document.createElement("button");
    todayTab.classList.add("nav-button");
    todayTab.textContent="Today";
    todayTab.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))return;
        setNavActive(todayTab);
        displayToday();
    })
    const weekTab = document.createElement("button");
    weekTab.classList.add("nav-button");
    weekTab.textContent="Week";
    weekTab.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))return;
        setNavActive(weekTab);
        displayWeek();
    })

    taskSection.appendChild(tooDooTab);
    taskSection.appendChild(todayTab);
    taskSection.appendChild(weekTab);

    return taskSection;
}
function displayTaskContent(){
    const content = document.createElement("div");
    content.classList.add("content");
    const contentTitle = document.createElement("div");
    contentTitle.classList.add("content-title");
    contentTitle.textContent= "Task's To Do";

    const inputTask = document.createElement("input");
    inputTask.classList.add("task-input")
    const addTask= document.createElement("button");
    addTask.classList.add("add-task");
    addTask.addEventListener("click", (e) => {

    })
}
function displayToday(){
    const content=document.createElement("div");
}
function displayWeek(){
    const content= document.createElement("div");
}
function displayProject() {
    const project= document.createElement("div");
}