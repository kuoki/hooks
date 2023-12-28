/* eslint-disable react/prop-types */
import {useForm} from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''      
    })
    const onFormSubmit = (e) => {
      e.preventDefault()
      if (description.lenght <= 1) return;

      const newTodo = {
        id: new Date().getTime(),
        description,
        done: false
      }
      onNewTodo(newTodo)
      onResetForm()
    }
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
