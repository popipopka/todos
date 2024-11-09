import $ from "jquery";

class Button {
    constructor(label, onClick) {
        this.$button = $('<button>')
            .text(label)
            .addClass('button')
            .on('click', onClick);
    }

    render() {
        return this.$button
    }
}

export default Button