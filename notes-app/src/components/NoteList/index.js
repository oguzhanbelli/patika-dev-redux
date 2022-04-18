import React from "react";
import { useSelector } from "react-redux";
function NoteList() {
  const notes = useSelector((state) => state.notes.items);
  const filterText = useSelector((state) => state.notes.filterText);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div className="md:w-[500px] lg:w-[500px] w-[400px]  justify-center text-center items-center   flex flex-wrap gap-6 mt-5 mb-4">
      {filteredNotes.map((note) => (
        <div
          className="md:w-3/12 lg:w-3/12  text-white h-[100px] break-words  max-h-[60px] overflow-y-scroll overflow-x-hidden m-2 whitespace-pre-wrap    w-[130px]   flex justify-center text-center items-center rounded-md"
          style={{ backgroundColor: note.color }}
          key={note.id}
        >
          <div className="m-10">
            <p className="font-semibold text-sm  text-white">{note.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
