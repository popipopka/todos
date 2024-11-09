import $ from 'jquery';

import {Button, CheckBox} from "../index.js";

class Sidebar {
    constructor(onClickFilterToday, onClickFilterWeek, onCheck, onUncheck) {
        this.$container = $('<div>')
            .addClass('sidebar')

        this.btnFilterToday = new Button("Сегодня", onClickFilterToday)
        this.btnFilterWeek = new Button("На неделю", onClickFilterWeek)
        this.checkbox = new CheckBox("Только невыполненные", onCheck, onUncheck)
    }

    render() {
        this.$container.append(
            this.btnFilterToday.render(),
            this.btnFilterWeek.render(),
            this.checkbox.render()
        )

        return this.$container
    }
}

export default Sidebar