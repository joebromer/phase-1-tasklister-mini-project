document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoButton = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');

        // Create a span for the task text
        const span = document.createElement('span');
        span.textContent = todoText;

        

        // Create a delete button
        const deleteButton = document.createElement('span');
        deleteButton.textContent = '✖';
        deleteButton.className = 'delete-btn';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

    

        // Append elements to the list item
        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = ''; // Clear the input field
    }

    // Add event listener to the Add button
    addTodoButton.addEventListener('click', addTodo);

    // Optional: Add the ability to add with Enter key
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    
});
