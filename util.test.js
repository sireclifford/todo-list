import {
  addTodo, deleteTodo, updateTodo, removeTodo,
} from './util.js';

describe('add_delete_test', () => {
  it('add_delete_Todo', () => {
    const listArray = [
      {
        id: 0,
        title: 'test',
        completed: false,
      },
      {
        id: 1,
        title: 'test2',
        completed: false,
      },
      {
        id: 2,
        title: 'test3',
        completed: false,
      },
    ];
    const quest = (id) => listArray.filter((item) => item.id !== id);

    expect(addTodo('test')).toBe(1);
    expect(addTodo('test2')).toBe(1);
    expect(addTodo('test3')).toBe(1);
    expect(deleteTodo(0)).toEqual(quest(0));
    expect(deleteTodo(1)).toEqual(quest(1));
    expect(deleteTodo(2)).toEqual(quest(2));
  });
});

describe('edit_description_test', () => {
  it('edit_description_Todo', () => {
    expect(updateTodo(0, 'clifford', true).title).toBe('clifford');
  });
});

describe('edit_status_test', () => {
  it('edit_completed_status_Todo', () => {
    expect(updateTodo(0, 'test', true).completed).toBe(true);
  });
});

describe('Remove completed', () => {
  it('clear_completed_Todo', () => {
    const listArray = [
      {
        id: 0,
        title: 'test',
        completed: true,
      },
      {
        id: 1,
        title: 'test2',
        completed: true,
      },
      {
        id: 2,
        title: 'test3',
        completed: true,
      },
    ];
    expect(removeTodo(listArray)).toEqual([]);
  });
});

describe('test_DOM', () => {
  it('test_DOM', () => {
    const list = document.createElement('ul');
    list.id = 'todo-list';
    const listItem = document.createElement('li');
    listItem.id = 'todo-item';
    listItem.innerHTML = 'test';
    list.appendChild(listItem);
    expect(list.innerHTML).toBe('<li id="todo-item">test</li>');
  });
});