import { compareAsc, toDate} from 'date-fns'
import Project from'./project'
import Task from './Task'

export default class todo{
    constructor() {
        this.projects = []
        this.projects.push(new Project('Set Task'))
        this.projects.push(new Project('Today'))
        this.projects.push(new Project('Week'))
    }

    setProjects(projects){
        this.projects= projects
    }
    getProjects(){
        return this.projects
    }
    getProject(projectName){
        return this.projects.find((project) => project.getName() === projectName)
    }
    contains(projectName){
        return this.projects.some((project) => project.getName() === projectName)
    }
    addProject(newProject){
        if (this.projects.find((project) => project.name === newProject.name))
            return
        this.projects.push(newProject)
    }
    deleteProject(projectName){
        const projectToDelete = this.projects.find(
            (project) => project.getName() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    }
    updateTodayProject() {
        this.getProject('Today').tasks = []

        this.projects.forEach((project) => {
            if (project.getName() ==='Today' || project.getName() ==='Week')
                return
            const todayTasks = projects.getTasksToday()
            todayTasks.forEach((task) => {
                const taskName = `${task.getName()} (${project.getName()})`
                this.getProject('Today').addTask(new Task(taskName, task.getDate()))
            })
        })
    }
}