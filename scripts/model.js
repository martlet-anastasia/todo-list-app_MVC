export const model = {
    data: [],
    get: function() {
        return JSON.parse(localStorage.getItem('todos'))
    },
    set: function(obj) {
        localStorage.setItem('todos', JSON.stringify(obj))
        this.data = obj
    },
}
