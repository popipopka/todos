import $ from 'jquery';

class CheckBox {
    constructor(label, onCheck, onUncheck) {
        this.$container = $('<div>')
            .addClass('checkbox-container')

        this.checkbox = $('<input>')
            .attr('type', 'checkbox')
            .addClass('custom-checkbox')
            .change(() => this.handleChange());

        this.label = $('<label>')
            .addClass('checkbox-label')
            .text(label)
            .on('click', () => {
                this.checkbox.prop('checked', !this.checkbox.prop('checked'));
                this.handleChange()
            })
    }

    handleChange() {
        if (this.checkbox.prop('checked')) {
            console.log("checked")
        } else {
            console.log("unchecked")
        }
    }

    render() {
        this.$container.append(this.checkbox, this.label)

        return this.$container
    }
}

export default CheckBox