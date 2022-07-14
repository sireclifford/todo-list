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
  