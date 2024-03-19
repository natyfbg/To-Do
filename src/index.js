import './styles.css';
import { createTodo } from './todo';
import { createTodoItem } from './ui';
import { saveTodos, loadTodos } from './storage';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Load todos and filter out any invalid items
  let todos = loadTodos();
  todos = todos.filter(todo => todo.title && todo.description && todo.dueDate && todo.priority);
  console.log('Filtered loaded todos:', todos);

  todos.forEach(todo => {
    console.log('Appending todo:', todo);
    app.appendChild(createTodoItem(todo, todos, saveTodos));
  });

  document.getElementById('todo-form').addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('todo-title').value.trim();
    const description = document.getElementById('todo-description').value.trim();
    const dueDate = document.getElementById('todo-dueDate').value;
    const priority = document.getElementById('todo-priority').value;

    // Validate form input before creating a new todo
    if (title && description && dueDate && priority) {
      const newTodo = createTodo(title, description, dueDate, priority);
      todos.push(newTodo);
      saveTodos(todos);
      console.log('New todo created and saved:', newTodo);

      const todoElement = createTodoItem(newTodo, todos, saveTodos);
      app.appendChild(todoElement);

      document.getElementById('todo-form').reset();
    } else {
      console.log('Form data invalid, new todo not created');
      // Handle invalid input feedback to user here
    }
  });
});
