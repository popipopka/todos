import $ from 'jquery';

import {Button, CheckBox} from "../index.js";

class Sidebar {
    constructor(onClickFilterToday, onClickFilterWeek, onToggleIncomplete) {
        this.$container = $('<div>')
            .addClass('sidebar')

        this.btnFilterToday = new Button("Сегодня", () => console.log('today'))
        this.btnFilterWeek = new Button("На неделю", () => console.log('week'))
        this.checkbox = new CheckBox("Только невыполненные", () => console.log("check"))
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