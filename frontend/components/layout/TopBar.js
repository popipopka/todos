import $ from 'jquery';
import Search from '../ui/Search.js';
import {Icon} from "../index.js";

class TopBar {
    constructor(onSearch) {
        this.$container = $('<div>')
            .addClass('top-bar')

        this.search = new Search("Поиск", onSearch)
        this.avatar = new Icon('/assets/ic-avatar.svg', 'avatar-icon')
    }

    render() {
        this.$container.append(this.search.render(), this.avatar.render());

        return this.$container;
    }
}

export default TopBar