// Imports
import { modal, card, header } from "./templates.js"
import { controller } from "./controller.js"
import { view } from "./view.js"
import { model } from "./model.js"

// DOM
const root = document.querySelector('#root')

// App
function app() {
    view.init(root)
    const main = document.querySelector('#main')
    
    model.data = model.get()
    view.render(main, model.data)

    // Testing that function works

    // open modal window or any other element 
    // const modalOverlay = document.querySelector('#modalOverlay')
    // view.openModal(modalOverlay)

    // close modal window or any other element 
    // view.closeModal(modalOverlay)

    // getting data from local Storage
    // model.data = model.get()
    // console.log(model.data)
    
    // set data to local Storage
    /*
    let todos = [
        {
            title: "Task1",
            text: "Text 1",
            time: "33:00",
            id: 10,
            isDone: true,
        },
        {
            title: "Task2",
            text: "Text 2",
            time: "39:00",
            id: 11111,
            isDone: false,
        }
    ]
    model.set(todos)
    console.log(model.data)
    */

    // render function
    // view.render(model.data)

}

app()
