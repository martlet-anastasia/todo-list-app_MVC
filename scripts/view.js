import { modal, card, header, button, main } from "./templates.js"
import { model } from "./model.js"

export const view = {
    init: function(root) {
        // Add needed buttons
        let header_button = `${button("Add next task")}${button("Delete last task")}`
        
        // Show static elements - header & modal window (hidden)
        root.insertAdjacentHTML('afterbegin', header(`${header_button}`))
        root.insertAdjacentHTML('beforeEnd', main())
        root.insertAdjacentHTML('afterbegin', modal())
        
        // Get localStorage data
        model.data = model.get()
    },
    openModal: function(modal) {
        modal.classList.remove('hidden')
    },
    closeModal: function (modal) {
        modal.classList.add('hidden')
    },
    render: function (data) {
        if(data) {
           // String with card info 
        let tasksString = data.map(element => {
            if(element.isDone) {
                return card(element.title, element.text, "Task is done", "bg-green-200")
            } else {
                return card(element.title, element.text, element.time, "bg-gray-50")
            }
        }).join('')
        
        // push to DOM structure
        root.querySelector('#main').insertAdjacentHTML('beforeEnd', tasksString)
        }
    },
}