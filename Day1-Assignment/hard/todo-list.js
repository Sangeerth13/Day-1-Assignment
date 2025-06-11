/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let todos = [];

class Todo {
  add(todo) {
    todos.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < todos.length) {
      todos.splice(index, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < todos.length) {
      todos[index] = updatedTodo;
    }
  }

  getAll() {
    return todos;
  }

  get(index) {
    if (index >= 0 && index < todos.length) {
      return todos[index];
    }
    return null;
  }

  clear() {
    todos = [];
  }
}

module.exports = Todo;
