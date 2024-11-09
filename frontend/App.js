import {TopBar, Sidebar, TodoList} from "./components/index.js";
import $ from 'jquery'

class App {
    constructor() {
        this.container = $('#app')
    }

    init() {
        const topBar = new TopBar(() => console.log('onSearch'))
        const sidebar = new Sidebar(
            () => console.log('today'),
            () => console.log('week'),
            () => console.log('incomplete'))
        const todoList = new TodoList()

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