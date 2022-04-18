import "./App.css";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import TextArea from "./components/TextArea";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <div className="flex w-screen h-screen dark:bg-slate-700 dark:text-white   min-h-screen min-w-screen overflow-hidden flex-col bg-gray-200 justify-center items-center justify-items-center text-center">
      <h1 className="font-bold">Notes App</h1>
<div className="fixed top-0 right-2">
<ThemeButton/>
</div>
      <Search />

      <TextArea/>
      <NoteList/>
    </div>
  );
}

export default App;
