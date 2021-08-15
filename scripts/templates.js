function modal() {
    return `
    <div class="fixed z-10 inset-0 overflow-y-auto hidden" id="modalOverlay">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">Create new task</h3>
                            <div class="mt-2 mb-4">
                                <p class="text-sm text-gray-500">Fill in the fields below to create a new task</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="input-title">Title</label>
                                <div class="mt-2 mb-3 relative rounded-md shadow-sm border-2 border-transparent">
                                    <input class="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                        type="text" name="input-title" id="input-title" placeholder="Enter task title"
                                        required="">
                                </div>
                                <label class="block text-sm font-medium text-gray-700" for="input-text">Text</label>
                                <div class="mt-2 mb-3 relative rounded-md shadow-sm border-2 border-transparent">
                                    <input class="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                        type="text" name="input-text" id="input-text"
                                        placeholder="Enter task description" required="">
                                </div>
                                <label class="block text-sm font-medium text-gray-700" for="input-time">Time</label>
                                <div class="mt-2 mb-3 relative rounded-md shadow-sm border-2 border-transparent">
                                    <input class="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                        type="text" name="input-time" id="input-time" placeholder="Enter task time"
                                        required="">
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        type="submit" id="btnCreate">
                        Create
                    </button>
                    <button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        type="button" id="btnCancel">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
}

function card(title, text, time, bg_color) {
    return `
    <div class="bg-white shadow overflow-hidden sm:rounded-lg w-60 mb-5">
        <h2 class="text-lg leading-6 font-medium text-gray-900 px-4 pt-4 sm:px-6">${title}</h2>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 px-4 pb-5 sm:px-6">${text}s</p>
        <div class="border-t border-b border-gray-200 ${bg_color} px-4 py-3 sm:px-6">
            <p class="text-xs font-medium text-gray-500">${time}</p>
        </div>
        <div class="text-sm text-gray-500 px-4 pt-3 pb-2 sm:px-5 flex justify-between">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
        </div>
    </div>
    `
}

function header(button) {
    // Placeholder for several buttons in the header with specific names
    return `
    <div class="top-0 py-3 sticky bg-gray-100 flex sm:justify-end justify-center">
        <div class="sm:mx-5">
            ${button}
        </div>
    </div>
    `
}

function button(btnText) {
    return `
    <button class="bg-gray-600 rounded-none sm:rounded-md sm:mr-2 px-3 py-1 text-white sm:text-xs hover:bg-gray-700" id="addBtn">
        ${btnText}
    </button>
    `
}

function main() {
    return `
    <div id="main" class="mx-5 mt-5 flex flex-col items-center"></div>
    `
}

export { modal, card, header, button, main }