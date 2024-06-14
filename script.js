// const todoIn = document.querySelector('#todo').value
// const todoDate = document.querySelector('#date').value
// const submit = document.querySelector('#submit').addEventListener('click', function(){

// })


const todoInput = document.querySelector('#todo');
const dateInput = document.querySelector('#date');
const submitButton = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');

submitButton.addEventListener('click', function(e){
    e.preventDefault(); // Mencegah pengiriman formulir default

    const todoText = todoInput.value;
    const todoDate = dateInput.value;

    if (todoText.trim() !== '') { // Pastikan input tidak kosong
        const newTodoItem = document.createElement('li');
        newTodoItem.classList.add('rounded')
        newTodoItem.innerHTML = `
    <input type="checkbox" class="done-checkbox">
    <span>${todoText}</span>
    <span class="date">${todoDate}</span>
    <button class="delete">Delete</button>
`;
        todoList.appendChild(newTodoItem);

        // Bersihkan input
        todoInput.value = '';
        dateInput.value = '';

        // Tambahkan event listener untuk tombol hapus
        const deleteButton = newTodoItem.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newTodoItem);
        });
    }
});

const doneCheckbox = newTodoItem.querySelector('.done-checkbox');
doneCheckbox.addEventListener('change', function() {
    if (this.checked) {
        todoList.appendChild(newTodoItem); // Pindahkan ke bawah jika dicentang
    } else {
        todoList.prepend(newTodoItem); // Pindahkan ke atas jika tidak dicentang
    }
});