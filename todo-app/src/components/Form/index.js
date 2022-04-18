import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Loading from '../Loading';
import Error from '../Error';
import { addTodoAsync } from "../../redux/todos/todosSlice";
function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.todos.addNewTodo.isLoading);
  const error = useSelector(state => state.todos.addNewTodo.error);
  const handleSubmit = async (e) => {
    if (!title) return;
    e.preventDefault();

    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };

 
  return (
    <form style={{display:"flex",alignItems:"center"}} onSubmit={handleSubmit}>
      <input
      disabled={isLoading}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
     {
       isLoading ? <Loading/>: ""
     }
     {error && <Error message={error}/> }
    </form>

  );
}

export default Form;
