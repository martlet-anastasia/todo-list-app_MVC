// Todos data
export const todos = {
    data: [],
    getLocalStorage: function() {
        return JSON.parse(localStorage.getItem('todos'))  
    },
    setLocalStorage: function() {
        localStorage.setItem('todos', JSON.stringify(this.data))
    }
}
