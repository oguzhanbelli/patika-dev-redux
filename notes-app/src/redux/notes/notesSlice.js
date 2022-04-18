import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [
          { id: nanoid(), title: "Note 1", color: "#ddd" },
          { id: nanoid(), title: "Note 2", color: "#fde047" },
        ],
    colors: [
      { id: nanoid(), color: "#9333ea" },
      { id: nanoid(), color: "#e879f9" },
      { id: nanoid(), color: "#fde047" },

      { id: nanoid(), color: "#38bdf8" },
      { id: nanoid(), color: "#6ee7b7" },
    ],
    // theme: localStorage.getItem("theme") ? localStorage.getItem('theme') : "dark" ,
    filterText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem(
        "items",
        JSON.stringify([...state.items])
      );
    },
    filterNotes: (state, action) => {
      const param = action.payload;

      state.filterText = param;
    },
    // darkMode: (state, action) => {
    //   const theme = action.payload;
    //   const root = window.document.documentElement;
    //   const isDark = state.theme === "light";

    //   if (isDark) {
    //     state.theme = "dark";
        
    //   } else {
    //     state.theme = "light";
    //   }
    //   root.classList.remove(state.theme === "light" ? "dark" : "light");
      

 
    //   root.classList.add(state.theme);
    //   localStorage.setItem("theme", theme);
    // },
  },
});

export const { addNote, filterNotes } = notesSlice.actions;
export default notesSlice.reducer;
