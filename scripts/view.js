import { modal, card, header, main } from "./templates.js"
import { model } from "./model.js"

export const view = {
    init: function(root) {
        // Show static elements - header & modal window (hidden)
        root.insertAdjacentHTML('afterbegin', header())
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
            const tasksString = data.map(element => card(element)).join('')
            // push to DOM structure
            root.querySelector('#main').insertAdjacentHTML('beforeEnd', tasksString)
        }
    },
}