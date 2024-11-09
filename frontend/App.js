import {TopBar, Sidebar} from "./components/index.js";
import $ from 'jquery'

class App {
    constructor() {
        this.container = $('#app')
    }

    init() {
        const topBar = new TopBar(() => console.log('onSearch'))
        const sidebar = new Sidebar(1, 2, 3, 4)

        this.container.append(topBar.render(), sidebar.render());
    }
}

export default App