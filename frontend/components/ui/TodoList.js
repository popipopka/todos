import $ from 'jquery';
import {TodoItem} from "../index.js";

class TodoList {
    constructor() {
        this.$container = $('<div>')
            .addClass("todo-list-container")
    }

    async loadData(url) {
        try {
            const todos = await $.get(url);

            this.$container.empty();

            todos.forEach(todo => {
                const todoItem = new TodoItem(
                    todo.id,
                    todo.name,
                    todo.shortDesc,
                    todo.fullDesc,
                    todo.date,
                    todo.status
                ).render()

                this.$container
                    .append(todoItem)
            })
        } catch (err) {
            console.error("Student upload error:" + err)
        }
    }

    render() {
        return this.$container
    }
}

export default TodoList