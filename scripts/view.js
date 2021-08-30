import { header, todosContainer, modalAddTodo, card } from './templates.js'
import { todos } from './model.js'
import { addTodo, deleteAllTodos, deleteLastTodo, unshiftTodo, cancelCreation, deleteStyle } from './controller.js'

export const view = {
    init: function() {
        root.insertAdjacentHTML('afterbegin', header())
        root.insertAdjacentHTML('beforeend', todosContainer())
        root.insertAdjacentHTML('beforeend', modalAddTodo())
    },
    render: function() {
        document.getElementById('todosContainer').innerHTML = ''
        document.getElementById('todosContainer').insertAdjacentHTML('afterbegin', todos.data.map(element => card(element)).join(''))
        const progressTasks = todos.data.filter(obj => obj.isDone === false).length
        const finishedTasks = todos.data.filter(obj => obj.isDone === true).length
        document.getElementById('progressTodos').textContent = `In progress (${progressTasks})`
        document.getElementById('finishedTodos').textContent = `${finishedTasks}`
    },
    eventListeners: function() {
        document.getElementById('addTodo').addEventListener('click', addTodo)
        document.getElementById('deleteAllTodos').addEventListener('click', deleteAllTodos)
        document.getElementById('deleteLastTodo').addEventListener('click', deleteLastTodo)
        document.getElementById('btnCreate').addEventListener('click', unshiftTodo)
        document.getElementById('btnCancel').addEventListener('click', cancelCreation)
        document.getElementById('inputTitle').addEventListener('click', deleteStyle)
        document.getElementById('inputText').addEventListener('click', deleteStyle)
    
        document.getElementById('todosContainer').addEventListener('click', event => {
            let targetIcon = event.target.closest('svg')
            if (!targetIcon) return;
            
            if(targetIcon.id === "deleteIcon") {
                let todoIndexDelete = Array.from(document.getElementById('todosContainer').children).indexOf(event.target.closest('#cardTodo'))
                todos.data.splice(todoIndexDelete, 1)
                todos.setLocalStorage()
                view.render()
            }
            
            if(targetIcon.id === "finishIcon") {
                let todoIndexDone = Array.from(document.getElementById('todosContainer').children).indexOf(event.target.closest('#cardTodo'))
                todos.data[todoIndexDone].isDone = true
                todos.setLocalStorage()
                view.render()
            }
        })
    }
}
