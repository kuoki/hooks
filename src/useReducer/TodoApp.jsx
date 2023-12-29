
import TodoList from "./todoList";
import TodoAdd from "./TodoAdd";
import useTodo from "../hooks/useTodo";


const TodoApp = () => {

  
 const { handleNewTodo, todoCount, pendingTodoCount, handleRemoveTodo, handleToggleTodo, todos } = useTodo()
  return (
    <>
      <h1>
        Tareas: {todoCount} Pendientes:<small> {pendingTodoCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onRemoveTodo={ handleRemoveTodo } onToggleTodo={ handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
