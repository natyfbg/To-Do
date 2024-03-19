// storage.js
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    return todos;
}

export { saveTodos, loadTodos };
