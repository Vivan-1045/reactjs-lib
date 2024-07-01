import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Notes",
    },
  ],
};

export const todoSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    updateTodo : (state,action) =>{
      state.todos = state.todos.map((prevTodo) => prevTodo.id === id ? todo : action.payload)
    },
  },
});

export const {addTodo,removeTodo,updateTodo} =todoSlice.actions
export default todoSlice.reducer
