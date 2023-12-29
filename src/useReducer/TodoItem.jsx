/* eslint-disable react/prop-types */

const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li key={todo} className="list-group-item d-flex justify-content-between">
      <span className={`align-self-center ${ todo.done ? "text-decoration-line-through" : ""}`} onClick={() => onToggleTodo(todo.id)}>
        {todo.description}
      </span>
      <button onClick={() => onRemoveTodo(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
