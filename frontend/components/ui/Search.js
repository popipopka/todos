import $ from 'jquery';
import Icon from "./Icon.js";

class Search {
    constructor(placeholder, onSearch) {
        this.$container = $('<div>')
            .addClass('search-container')

        this.icon = new Icon('/assets/ic-search.svg', 'search-icon')

        this.$searchInput = $('<input>')
            .addClass('search-input')
            .attr('placeholder', placeholder)
            .attr('type', 'text')
            .on('input', () => this.handleInput())

        this.onSearch = onSearch

        this.typingTimer = null;
        this.doneTypingInterval = 1000;
    }

    handleInput(action) {
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
            this.onSearch(this.$searchInput.val())
        }, this.doneTypingInterval);
    }

    render() {
        this.$container.append(this.icon.render(), this.$searchInput)

        return this.$container
    }
}

export default Search