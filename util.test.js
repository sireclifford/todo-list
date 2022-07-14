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
  
