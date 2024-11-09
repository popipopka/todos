import $ from 'jquery';
import Icon from "./Icon.js";

class TodoItem {
    constructor(id, name, shortDesc, fullDesc, date, status) {
        this.$container = $('<div>')
            .addClass("todo-item-container");

        this.id = id
        this.name = name
        this.shortDesc = shortDesc
        this.fullDesc = fullDesc
        this.date = new Date(date)
        this.status = status
    }

    beautifyDate() {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'};
        return this.date.toLocaleString('ru-RU', options).replace(",", '')
    }

    render() {
        const $leftContainer = $('<div>')
            .addClass("todo-item-part")
            .addClass("left")
            .append(
                $('<h2>')
                    .text(this.name),

                $('<p>')
                    .text(this.shortDesc)
            )

        const $rightContainer = $('<div>')
            .addClass("todo-item-part")
            .addClass("right")
            .append(
                new Icon(this.status
                    ? "/assets/ic-true-box.svg"
                    : "/assets/ic-false-box.svg", "todo-status").render(),
                $('<p>')
                    .text(this.beautifyDate())
            )

        this.$container.append($leftContainer, $rightContainer)

        return this.$container
    }
}

export default TodoItem