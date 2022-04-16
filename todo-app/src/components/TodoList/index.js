import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy ,selectFilteredTodos} from "../../redux/todos/todosSlice";
function TodoList() {

  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  const handleDestroy = (item) => {
    if (window.confirm("Are you sure ? ")) {
      dispatch(destroy(item));
    }
  };



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
              onChange={() => dispatch(toggle(item))}
              className="toggle"
              type="checkbox"
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
