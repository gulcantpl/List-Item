const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const itemList = document.querySelector('ul');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = input.value.trim();

  if (inputValue) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className =
      'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = inputValue;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-dark btn-sm';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    // Add event listener to delete button
    deleteBtn.addEventListener('click', function () {
      listItem.remove();
    });

    // Append button to list item and list item to list
    listItem.appendChild(deleteBtn);
    itemList.appendChild(listItem);

    // Clear input
    input.value = '';
  } else {
    alert('Please enter a valid input.');
  }
});
