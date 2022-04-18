import React,{useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter,clearCompleted,selectTodos,selectActiveFilter } from "../../redux/todos/todosSlice";

function ContentFooter() {
  const items = useSelector(selectTodos);
  const activeFilter = useSelector(selectActiveFilter);
  const itemsLeft = items.filter((item) => !item.completed).length;
  const dispatch = useDispatch();

  useEffect(() => {
localStorage.setItem('activeFilter',activeFilter);

  },[activeFilter])

  console.log("items", items, itemsLeft);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#"
            onClick={() => dispatch(changeActiveFilter("all"))}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => dispatch(changeActiveFilter("active"))}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => dispatch(changeActiveFilter("completed"))}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button onClick={() => dispatch(clearCompleted())} className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default ContentFooter;
