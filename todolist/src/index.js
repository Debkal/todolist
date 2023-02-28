import './style.css';
import { format } from 'date-fns'
import Storage from './storage'
import Project from './project';
import Task from './settask';
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
    const nav= document.createElement("nav");

    nav.appendChild(displayTasks());
    nav.appendChild(displayProject());
    const content = document.createElement("div");
    content.classList.add("content");
    content.id="content";

    main.appendChild(nav);
    main.appendChild(content);
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
//set nav button active
function setNavActive(button) {
    const buttons= document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}
//set task button active
function setTaskActive(button) {
    const buttons= document.querySelectorAll(".add-task");
    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}
//reset content and active classes
function resetContent(){
    const content = document.getElementById("content");
    content.innerHTML="";
    
}
//remove input container
function resetInput(){
    const content = document.getElementById("content");
    const inputContainer = document.getElementById("inputContainer");
    content.removeChild(inputContainer);
}
function resetActive(button){
    const buttons= document.querySelectorAll(".add-task");
    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove("active");
        }
    });
}
//nav dom
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
//dom for task content
function displayTaskContent(){
    const content = document.getElementById("content");

    const contentTitle = document.createElement("div");
    contentTitle.classList.add("content-title");
    contentTitle.id = "contentTitle";
    contentTitle.textContent= "Task's To Do";

    const inputTask = document.createElement("input");
    inputTask.classList.add("task-input")
    const addTask= document.createElement("button");
    addTask.classList.add("add-task");
    addTask.id ="addTask"
    addTask.textContent="Add Task";

    content.appendChild(contentTitle);
    content.appendChild(addTask);
    addTask.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))return;
        setTaskActive(addTask);
        displayInput();
    })
    return content;
}
//dom for displaying task input
function displayInput(){
    const navButton = document.querySelectorAll(".nav-button");
    const addTask = document.querySelectorAll('add-task');
    const content = document.getElementById("content");
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
    inputContainer.classList.add("active");
    inputContainer.id ="inputContainer";
    const taskLabel = document.createElement("label");
    taskLabel.textContent = "Task Name";
    taskLabel.classList.add("task-label");
    const taskName = document.createElement("input");
    taskName.classList.add("task-name");
    taskName.id = "taskName";
    taskName.type="text";

    const taskDateLabel = document.createElement("label");
    taskDateLabel.textContent = "Enter the date";
    const taskDate = document.createElement("input");
    taskDate.classList.add("task-date");
    taskDate.id="taskDate";
    taskDate.type="datetime-local";
    

    const greenButton = document.createElement("button");
    greenButton.classList.add("green-button");
    greenButton.textContent="Add";
    greenButton.addEventListener("click", (e) => {
        
    })

    const redButton = document.createElement("button");
    redButton.classList.add("red-button");
    redButton.textContent="Cancel";
    redButton.addEventListener("click", (e) => {
        resetInput()
        resetActive(addTask)
    })
    inputContainer.appendChild(taskLabel);
    inputContainer.appendChild(taskName);
    inputContainer.appendChild(taskDateLabel);
    inputContainer.appendChild(taskDate);
    inputContainer.appendChild(greenButton);
    inputContainer.appendChild(redButton);

    content.appendChild(inputContainer);
    return taskDate,taskName
}
function displayToday(){
    resetContent()
    const content=document.getElementById("content");

    const todayTitle = document.createElement("div");
    todayTitle.classList.add("today-title");

    content.appendChild(todayTitle);
}
function displayWeek(){
    const content= document.createElement("div");
}
function displayProject() {
    const project= document.createElement("div");
    project.classList.add("project");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent= "Projects";

    const projectList = document.createElement("div");
    projectList.classList.add("project-list");
    projectList.id = "projectList";
    
    const projectAddButton = document.createElement('button');
    projectAddButton.classList.add("project-add-button");
    projectAddButton.id ="projectAddButton"
    projectAddButton.textContent="Add Project";

    project.appendChild(projectTitle);
    project.appendChild(projectList);
    project.appendChild(projectAddButton);

    return project;
}
function addTask() {
    const projectName = document.getElementById
}
function loadProjects() {
    Storage.getToDo()
    .getProjects()
    .forEach((project) => {
        if(
            project.name !== 'Set Task' &&
            project.name !== 'Today' &&
            project.name !== 'Week' 
        )
        createProject(project.name)
    })
}
function renderHomePage() {
    const body=  document.body;

    body.appendChild(displayHeader());
    body.appendChild(displayMain())
    body.appendChild(displayFooter());
}
function createProject(name){
    const userProjects = document.getElementById('projectList')
    userProjects.innerHTML += `
    <button class ="button-project" data-project-button>
        <div class = "project-panel">
            <i class="fas fa-tasks"></i>
            <span>${name}</span>
        </div>
    </button>`
}

function addProjectButtons(){
    const addProjectButton = document.getElementById("projectAddButton");

}
renderHomePage();