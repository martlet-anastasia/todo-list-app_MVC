import { todos } from './model.js'
import { view } from './view.js'

// Open modal window to add new todo
function addTodo() {
    document.getElementById('modalAddTodo').classList.toggle('hidden')
}

// Delete all todo cards
function deleteAllTodos() {
    todos.data.length = 0
    todos.setLocalStorage()
    view.render()
}

// Delete last todo card
function deleteLastTodo() {
    todos.data.splice(todos.data.length-1, 1)
    todos.setLocalStorage()
    view.render()
}

// Pretty time convertion in card view - is used in unshiftTodo()
function prettyTime(time) {
    const hours = time.getHours() < 10 ? '0' + time.getHours().toString() : time.getHours().toString()
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes().toString() : time.getMinutes().toString()
    return hours + ':' + minutes
}

// add new todo to array of Todos
function unshiftTodo() {
    // Validate input data to not to be empty
    if(document.getElementById('inputTitle').value && document.getElementById('inputText').value) {
        // Create object with new todo info
        const creationTime = new Date()
        const newTodo = {}
        newTodo.title = document.getElementById('inputTitle').value
        newTodo.text = document.getElementById('inputText').value
        newTodo.time = prettyTime(creationTime)
        newTodo.isDone = false

        // Push new todo at the beginning of the general todo array
        todos.data.unshift(newTodo)
        
        // Update local storage and render the View
        todos.setLocalStorage()
        view.render()

        // Reset input fields
        document.getElementById('inputTitle').value = ''
        document.getElementById('inputText').value = ''
        document.getElementById('modalAddTodo').classList.toggle('hidden')
    
    } else if(!document.getElementById('inputTitle').value && !document.getElementById('inputText').value) {
        // Highlight required fields - both Title and Text
        document.getElementById('inputTitle').classList.add('placeholder-red-300')
        document.getElementById('inputTitle').classList.add('border-red-300')
        document.getElementById('inputTitle').placeholder = 'Required'
        document.getElementById('inputText').classList.add('placeholder-red-300')
        document.getElementById('inputText').classList.add('border-red-300')
        document.getElementById('inputText').placeholder = 'Required'

    } else if(!document.getElementById('inputTitle').value) {
        // Highlight required fields - Title
        document.getElementById('inputTitle').classList.add('placeholder-red-300')
        document.getElementById('inputTitle').classList.add('border-red-300')
        document.getElementById('inputTitle').placeholder = 'Required'

    } else {
        // Highlight required fields - Text
        document.getElementById('inputText').classList.add('placeholder-red-300')
        document.getElementById('inputText').classList.add('border-red-300')
        document.getElementById('inputText').placeholder = 'Required'
    } 
}

function cancelCreation() {
    // Reset input fields
    document.getElementById('modalAddTodo').classList.toggle('hidden')
    document.getElementById('inputTitle').value = ''
    document.getElementById('inputText').value = ''

    document.getElementById('inputTitle').classList.remove('placeholder-red-300')
    document.getElementById('inputTitle').classList.remove('border-red-300')
    document.getElementById('inputTitle').placeholder = 'Add title'

    document.getElementById('inputText').classList.remove('placeholder-red-300')
    document.getElementById('inputText').classList.remove('border-red-300')
    document.getElementById('inputText').placeholder = 'Add description'

}

// Delete `required` style when focused on inputTitle / inputText
function deleteStyle() {
    event.target.classList.remove('placeholder-red-300')
    event.target.classList.remove('border-red-300')
    switch (event.target.name) {
        case 'input-title':
            event.target.placeholder = 'Add title';
            break;
        case 'input-text':
            event.target.placeholder = 'Add description';
        default:
            break;
    }
}

export { addTodo, deleteAllTodos, deleteLastTodo, unshiftTodo, cancelCreation, deleteStyle }
