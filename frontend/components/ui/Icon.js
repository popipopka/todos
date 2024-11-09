import $ from "jquery";

class Icon {
    constructor(src, className) {
        this.$icon = $('<img>')
            .attr('src', src)
            .addClass(className)
    }

    render() {
        return this.$icon
    }
}

export default Icon