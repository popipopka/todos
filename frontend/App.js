import {TopBar} from "./components/index.js";
import $ from 'jquery'

class App {
    constructor() {
        this.container = $('#app')
    }

    init() {
        const topBar = new TopBar(() => console.log('onSearch'))

        this.container.append(topBar.render());
    }
}

export default App