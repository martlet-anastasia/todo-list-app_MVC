import { view } from './view.js'

const root = document.querySelector('#root')

function app() {
    view.init()
    view.render()
    view.eventListeners()
}

app()
