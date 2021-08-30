function header() {
    return `
    <div id="header" class="bg-gray-50">
        <div class="px-6 py-5">
            <h3 class="text-3xl text-black font-bold font-mono text-center mb-5">Todo list</h3>
            <div class="flex mb-5 sm:flex-row flex-col">
                <button id="addTodo" class="flex-1 px-2 py-1 mx-2 bg-blue-400 border-b-2 hover:bg-blue-500 lg text-white font-mono font-normal">
                    Add
                </button>
                <button id="deleteAllTodos" class="flex-1 px-2 py-1 mx-2 bg-blue-400 border-b-2 hover:bg-blue-500 lg text-white font-mono font-normal">
                    Delete all
                </button>
                <button id="deleteLastTodo" class="flex-1 px-2 py-1 mx-2 bg-blue-400 border-b-2 hover:bg-blue-500 lg text-white font-mono font-normal">
                    Delete last
                </button>
            </div>
            <div class="h-0.5 w-full bg-black mb-8"></div>
            <div class="flex justify-between flex-col sm:flex-row flex-col-reverse">
                <p id="progressTodos" class="mx-2 text-lg text-black font-mono font-normal"></p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p id="finishedTodos" class="mr-2 ml-0 text-lg text-black font-mono font-normal inline"></p>
                </div>
            </div>
        </div>
    </div>
    `
}

function todosContainer() {
    return `
    <div id="todosContainer" class="bg-gray-100 w-full pt-5 pb-1 px-5"></div>
    `
}

function modalAddTodo() {
    return `
    <div id="modalAddTodo" class="fixed z-10 inset-0 overflow-y-auto hidden">
        <div class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-sm sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div class="bg-white p-4 sm:p-6 pt-8">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div class="mt-6 mb-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h4 class="mb-5 mt-1 text-gray-900 font-bold font-sans text-lg leading-6">Create new todo</h4>
                            <div>
                                <textarea id="inputTitle" rows="1" cols="54" class="focus:outline-none focus:border-2 focus:border-blue-400 block w-full mb-4 py-1 pl-4 pr-8 text-sm font-sans font-normal text-gray-500 border-gray-300 border-b-2" type="text" name="input-title" placeholder="Add title"></textarea>
                                <textarea id="inputText" rows="2" cols="54" class="focus:outline-none focus:border-2 focus:border-blue-400 block w-full mb-2 py-1 pl-4 pr-8 text-sm font-sans font-normal text-gray-500 border-gray-300 border-b-2" type="text" name="input-text" placeholder="Add description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button id="btnCreate" class="w-full inline-flex mb-2 justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-400 sm text-white font-sans font-normal hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        type="submit">
                        Create
                    </button>
                    <button id="btnCancel" class="w-full inline-flex mb-2 justify-center rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white sm font-sans font-normal text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        type="button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
}

function card(obj) {
    return `
    <div id = "cardTodo" class="w-full flex ${obj.isDone ? "bg-green-400" : "bg-white"} shadow-md overflow-hidden rounded-lg mb-5 justify-between">
        <div class="flex flex-col">
            <h4 class="text-gray-900 font-bold font-mono text-lg px-4 pt-4 overflow-hidden">${obj.title}</h2>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 px-4 mb-4 font-mono font-normal overflow-hidden">${obj.text}</p>
            <div class="px-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-500 font-mono font-normal inline">${obj.time}</p>
            </div>
        </div>
        <div class="flex flex-col justify-around bg-gray-50 px-4 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" id="finishIcon" class="${obj.isDone ? "hidden" : ""} h-6 w-6 text-gray-400 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="deleteIcon" class="h-6 w-6 text-red-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
    </div>
    `
}

export { header, todosContainer, modalAddTodo, card }
