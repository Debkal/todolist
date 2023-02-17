import Project from "./project";
import Task from "./settask"
import todo from "./todo";

export default class Storage {
    static saveToDo(data){
        localStorage.setItem('todo', JSON.stringify(data))
    }

    static getToDo() {
        const todo = Object.assign(
            new Todo(),
            Json.parse(localStorage.getItem('todo'))
        )

        todo.setProjects(
            todo
            .getProjects()
            .map((project) => Object.assign(new Project(), project))
        )

        todo
            .getProjects()
            .foreach((project) =>
            project.setTasks(
                project.getTasks().map((task) => Object.assign(new Task(), task))
            ))
        
        return todo
    }
    static addProject(project) {
        const todo = Storage.getToDo()
        todo.addProject(project)
        Storage.saveToDo(todo)
    }
    static deleteProject(projectName){
        const todo = Storage.getToDo()
        todo.deleteProject(projectName)
        Storage.saveToDo(todo)
    }
    static addTask(projectName, task) {
        const todo = Storage.getToDo()
        todo.getProject(projectName).addTask(task)
        Storage.saveToDo(todo)
    }
    static deleteTask(projectName, taskName) {
        const todo = Storage.getToDo()
        todo.getProject(projectName).deleteTask(taskName)
        Storage.saveToDo(todo)
    }
    static renameTask(projectName, taskName, newTaskName) {
        const todo = Storage.getToDo()
        todo.getProject(projectName).getTask(taskName).setName(newTaskName)
        Storage.saveToDo(todo)
    }
    static setTaskDate(projectName,taskName,newDueDate) {
        const todo = Storage.getToDo()
        todo.getProject(projectName).getTask(taskName).setDate(newDueDate)
        Storage.saveToDo(todo)
    }
    static updateTodayProject() {
        const todo = Storage.getToDo()
        todo.updateTodayProject()
        Storage.saveToDo(todo)
    }
    static updateWeekProject() {
        const todo = Storage.getToDo()
        todo.updateWeekProject()
        Storage.saveToDo(todo)
    }

}