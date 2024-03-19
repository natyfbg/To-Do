function createTodoItem(todo, todos, saveTodos) {
    const element = document.createElement('div');
    element.className = 'todo';
    element.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p>Due: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <button class="edit-todo">Edit</button>
      <button class="delete-todo">Delete</button>
      <input type="checkbox" ${todo.isComplete ? 'checked' : ''} class="toggle-complete">
    `;
  
    // Delete todo item event
    const deleteButton = element.querySelector('.delete-todo');
    deleteButton.addEventListener('click', () => {
      const index = todos.indexOf(todo);
      if (index !== -1) {
        todos.splice(index, 1); // Remove the todo from the array
        saveTodos(todos); // Save the new todos array to localStorage
        element.remove(); // Remove the todo item from the UI
      }
    });
  
    // Toggle completion event
    const checkbox = element.querySelector('.toggle-complete');
    checkbox.addEventListener('change', () => {
      todo.isComplete = !todo.isComplete;
      saveTodos(todos);
      // Optionally update the UI or style the todo item as complete/incomplete
    });
  
    // TODO: Implement edit functionality here
  
    return element;
  }
  
  export { createTodoItem };
  