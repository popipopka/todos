import $ from 'jquery';
import {TodoItem} from "../index.js";

class TodoList {
    constructor() {
        this.$container = $('<div>')
            .addClass("todo-list-container")
    }

    render() {
        this.$container.append(
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:10', true).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:05', false).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:00', false).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:00', false).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:00', false).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:00', false).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:00', false).render(),
            new TodoItem(1, 'Название', 'Описание', 'Полное описание', '08.05.2022 00:00', false).render(),
        )
        return this.$container
    }
}

export default TodoList