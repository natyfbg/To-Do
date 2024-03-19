// todo.js
function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        isComplete: false,
        toggleComplete() {
            this.isComplete = !this.isComplete;
        },
        updateDetails(updatedTitle, updatedDescription, updatedDueDate, updatedPriority) {
            this.title = updatedTitle;
            this.description = updatedDescription;
            this.dueDate = updatedDueDate;
            this.priority = updatedPriority;
        },
    };
}

export { createTodo };
