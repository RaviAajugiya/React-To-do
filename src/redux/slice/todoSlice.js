import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn React ",
      description: "description",
      priority: 1,
      completed: false,
      date: "09-01-2024",
      label: "Personal",
    },
    {
      id: 2,
      title: "Learn Js ",
      description: "description",
      priority: 1,
      completed: false,
      date: "10-01-2024",
      label: "Label 1",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.text,
        description: action.payload.text,
        priority: action.payload.priority,
        date: action.payload.date,
        completed: false,
      };
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;