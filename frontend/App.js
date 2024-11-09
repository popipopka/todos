import {TopBar, Sidebar, TodoList} from "./components/index.js";
import $ from 'jquery'

class App {
    constructor() {
        this.container = $('#app')
    }

    init() {
        const todoList = new TodoList()

        todoList.loadData('http://localhost:8080/api/todos').then(() => console.log("GET api/todos"))

        const topBar = new TopBar((q) => {
            todoList.loadData(`http://localhost:8080/api/todos/find?q=${q}`).then(() => console.log("GET api/todos/find"))
        })

        const sidebar = new Sidebar(
            () => console.log('today'),
            () => console.log('week'),
            () => console.log('check'),
            () => console.log('uncheck'),
        )

        this.container.append(
            topBar.render(),
            $('<div>')
                .addClass('main-container')
                .append(
                    sidebar.render(),
                    todoList.render()
                )
        );
    }
}

export default App