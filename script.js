let counter = 1;

// Add a new to-do item
function addTodo() {
    const input = document.getElementById("input");
    const value = input.value;

    if (value.trim()) {
        const list = document.querySelector('#list'); // Parent element of the to-do items
        const todoDiv = createTodoElement(value); // Function to create a new to-do div

        list.appendChild(todoDiv); // Append the new to-do item to the DOM

        counter++;
        input.value = ""; // Clear the input field
    } else {
        alert("Please enter valid input:");
    }
}

// Create a new to-do element
function createTodoElement(value) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";

    // Create checkbox
    const checkbox = createCheckbox();

    // Create input element for the to-do text
    const inputElement = createInputElement(value);

    // Create buttons
    const updateBtn = createUpdateButton(inputElement);
    const deleteBtn = createDeleteButton(todoDiv);

    // Append elements to the to-do div
    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(inputElement);
    todoDiv.appendChild(updateBtn);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

// Create a checkbox element
function createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.onchange = function () {
        if (checkbox.checked) {
            checkbox.nextElementSibling.style.textDecoration = "line-through";
            checkbox.nextElementSibling.style.color = "gray";
        } else {
            checkbox.nextElementSibling.style.textDecoration = "none";
            checkbox.nextElementSibling.style.color = "black";
        }
    };
    return checkbox;
}

// Create an input element
function createInputElement(value) {
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = value;
    inputElement.readOnly = true;
    inputElement.className = "todo-text";
    inputElement.id = "todo-" + counter;

    return inputElement;
}

// Create an update button
function createUpdateButton(inputElement) {
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Edit";
    updateBtn.className = "edit-btn";

    updateBtn.onclick = function () {
        if (inputElement.readOnly) {
            inputElement.readOnly = false;
            updateBtn.textContent = "Save";
            inputElement.focus();
            inputElement.style.outline = "1px solid #007BFF";
        } else {
            inputElement.readOnly = true;
            updateBtn.textContent = "Edit";
            inputElement.style.outline = "none";
        }
    };

    return updateBtn;
}

// Create a delete button
function createDeleteButton(todoDiv) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        const list = document.querySelector("#list");
        list.removeChild(todoDiv);
    };

    return deleteBtn;
}

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeToggle.classList.add('dark');
    } else {
        modeToggle.classList.remove('dark');
    }
}
