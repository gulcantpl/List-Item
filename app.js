const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const itemList = document.querySelector('ul');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = input.value.trim();

  if (inputValue) {
    // li
    const listItem = document.createElement('li');
    listItem.className =
      'list-group-item d-flex justify-content-between align-items-center';

    // text span
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;

    // btn group
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '0.5rem';

    // delete
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-dark btn-sm';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.addEventListener('click', function () {
      listItem.remove();
    });

    // edit
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-dark btn-sm';
    editBtn.innerHTML = '<i class="fa-solid fa-edit"></i>';

    editBtn.addEventListener('click', function () {
      const inputEdit = document.createElement('input');
      inputEdit.type = 'text';
      inputEdit.className = 'form-control form-control-sm';
      inputEdit.value = textSpan.textContent;

      // enter or blur update
      inputEdit.addEventListener('blur', updateText);
      inputEdit.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          updateText();
        }
      });

      function updateText() {
        const newVal = inputEdit.value.trim();
        if (newVal !== '') {
          textSpan.textContent = newVal;
        }
        textSpan.style.display = 'inline';
        inputEdit.remove();
      }

      // hide text span and show input
      textSpan.style.display = 'none';
      listItem.insertBefore(inputEdit, btnGroup);
      inputEdit.focus();
    });

    // append elements
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    listItem.appendChild(textSpan);
    listItem.appendChild(btnGroup);
    itemList.appendChild(listItem);

    input.value = '';
  } else {
    alert('Please enter a valid input.');
  }
});
