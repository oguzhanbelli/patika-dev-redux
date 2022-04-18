import React from "react";
import { useSelector } from "react-redux";
function NoteList() {
  const notes = useSelector((state) => state.notes.items);
  const filterText = useSelector((state) => state.notes.filterText);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div className="md:w-[500px] lg:w-[500px] w-[400px] overflow-scroll md:overflow-auto   justify-center text-center items-center p-2   flex flex-wrap gap-3 mt-5 mb-4 lg:mt-0 lg:mb-0 ">
      {filteredNotes.map((note) => (
        <textare
          className="md:w-4/12 lg:w-3/12  text-white h-[100px] break-all   max-h-[60px] overflow-y-scroll  m-1 my-auto mx-auto   w-9/12    flex  justify-center items-center text-center  rounded-md"
          style={{ backgroundColor: note.color }}
          key={note.id}
        >
          <div className="p-10 text-center w-full h-full flex justify-center items-center">
            <p className="font-semibold text-sm  text-white">{note.title}</p>
          </div>
        </textare>
      ))}
    </div>
  );
}

export default NoteList;
