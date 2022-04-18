import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodoAsync,
  removeTodoAsync,
  selectFilteredTodos,
  getTodosAsync,
} from "../../redux/todos/todosSlice";
import Error from "../Error";
import Loading from "../Loading";
function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);

  const error = useSelector((state) => state.todos.error);
  const handleDestroy = async(id) => {

    if (window.confirm("Are you sure ? ")) {
      dispatch(removeTodoAsync(id));
    }
  };
  const handleToggle = async (id, completed) => {
    
  
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
  };
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <ul className="todo-list">
      {/* <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn JavaScript</label>
          <button className="destroy"></button>
        </div>
      </li> */}

      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              checked={item.completed}
              onChange={() => handleToggle(item.id, item.completed)}
              className="toggle"
              type="checkbox"
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
