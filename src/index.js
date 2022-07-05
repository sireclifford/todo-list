import './style.css';
import './assets/images/options.png';
import './assets/images/refresh.png';
import './assets/images/return.png';

const todoListItems = [
  {
    index: 0,
    description: 'Learn Webpack',
    completed: false,
  },
  {
    index: 1,
    description: 'Learn React',
    completed: true,
  },
  {
    index: 2,
    description: 'Learn TypeScript',
    completed: false,
  },
  {
    index: 3,
    description: 'Learn Angular',
    completed: false,
  },
  {
    index: 4,
    description: 'Learn Vue',
    completed: false,
  },
  {
    index: 5,
    description: 'Learn Node',
    completed: false,
  },
  {
    index: 6,
    description: 'Learn MongoDB',
    completed: false,
  },
];

const loadTodoList = () => {
  const itemContainer = document.querySelector('.items');
  todoListItems.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.innerHTML = `
      <input type="checkbox" ${item.completed ? 'checked' : ''}>`;
    const itemText = document.createElement('p');
    itemText.classList.add('item-name');
    itemText.innerHTML = item.description;

    const reOrderBtn = document.createElement('img');
    reOrderBtn.classList.add('item-reorder');
    reOrderBtn.src = 'assets/images/options.png';
    reOrderBtn.setAttribute('alt', 'reorder');

    itemElement.appendChild(itemText);
    itemElement.appendChild(reOrderBtn);
    itemContainer.appendChild(itemElement);
  });
};

window.onload = () => {
  loadTodoList();
};
