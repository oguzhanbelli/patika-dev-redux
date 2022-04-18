import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
function TextArea() {
  const colors = useSelector((state) => state.notes.colors);
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("#fde047");

  const handleClick = () => {
    if (!note) {
      return;
    }
    dispatch(addNote({ id: nanoid(), title: note, color: selectedColor }));
    setNote("");
  };
  return (
    <div className="w-[300px] h-[200px] lg:h-[300px]  dark:bg-slate-700 lg:w-[500px] md:h-[400px] md:w-[400px] bg-white relative mt-3 rounded-lg p-2 border-2 border-indigo-300">
      <form className="block text-left focus:border-none">
        <textarea
          onChange={(e) => setNote(e.target.value)}
          value={note}
          className="form-textarea resize-none dark:bg-slate-700 lg:mt-1 p-2  block w-full h-full mb-3 border-none"
          rows="3"
          placeholder="Enter note."
        ></textarea>
      </form>

      <div className="absolute cursor-pointer mb-2 gap-4 flex  bottom-2 lg:bottom-2 pt-3 pl-3 left-0">
        {colors.map((color) => (
          <div
            key={color.id}
            onClick={() => setSelectedColor(color.color)}
            className={`w-5 h-5  transition-all rounded-full block ring-${
              color.ringColor
            }] ${
              selectedColor === color.color ? "ring-2  ring-offset-1" : ""
            } hover:ring-2 ring-offset-1" `}
            style={{ backgroundColor: `${color.color}` }}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-3 lg:bottom-2 pt-3 pr-3 right-0">
        <button
          onClick={() => handleClick()}
          className="bg-indigo-500 p-2 text-center rounded-md text-white text-sm "
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TextArea;
