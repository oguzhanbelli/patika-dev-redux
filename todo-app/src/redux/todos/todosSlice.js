import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync/",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);

    return res.data;
  }
);
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
      data
    );

    return res.data;
  }
);
export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, data }) => {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`,
      data
    );
    console.log(res.data);

    return res.data;
  }
);
export const removeTodoAsync = createAsyncThunk(
  "todos/removeTodoAsync",
  async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`
    );

    return id;
  }
);
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem('activeFilter') ? localStorage.getItem('activeFilter') : 'all',
    addNewTodo:{
      isLoading:false,
      error:null
    }
  },
  reducers: {
    // toggle: (state, action) => {
    //   const { id } = action.payload;
    //   const item = state.items.find((i) => i.id === id);
    //   item.completed = !item.completed;
    // },
    // destroy: (state, action) => {
    //   const { id } = action.payload;
    //   const filtered = state.items.filter((i) => i.id !== id);
    //   state.items = filtered;
    //   console.log(filtered);
    // },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filter = state.items.filter((item) => item.completed === false);

      state.items = filter;
    },
  },
  extraReducers: {
    //get todos
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;

      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //add todo
    [addTodoAsync.pending]: (state, action) => {
      state.addNewTodo.isLoading = true;
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.addNewTodo.error = action.error.message;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.items.push(action.payload);
    },
    //toggle todo

    [toggleTodoAsync.fulfilled]: (state, action) => {
     
      const { id, completed } = action.payload;
      console.log(id,completed)

      const index = state.items.findIndex((item) => item.id === id);
    
      state.items[index].completed = completed;

    },
    [removeTodoAsync.fulfilled]: (state, action) => {
      const id = action.payload;

      const filteredIndex = state.items.findIndex((item) => item.id === id);

      state.items.splice(filteredIndex,1);
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }

  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};
export default todosSlice.reducer;
export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
