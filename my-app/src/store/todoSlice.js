import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (todos === null) {
    return [];
  }
  return JSON.parse(todos);
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: loadTodosFromLocalStorage(),
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
      saveTodosToLocalStorage(state.todos);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      saveTodosToLocalStorage(state.todos);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
      saveTodosToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
