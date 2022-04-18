import React from "react";
import { useDispatch } from "react-redux";
import { filterNotes } from "../../redux/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterNotes(e.target.value));
  };
  return (
    <div className="mt-5 w-[200px]">
      <input
        onChange={handleChange}
        type={"text"}
        className="rounded-lg dark:bg-slate-700 border-2 border-indigo-300 p-2 indent-2   placeholder:m-2 w-full"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
