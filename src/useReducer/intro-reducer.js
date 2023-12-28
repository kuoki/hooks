const initialState = [
  {
    id: 1,
    todo: "Salir de la Comarca",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === "[TODO] add todo"){
        return [...state, action.payload];
    }
  return state;
};

let todos = todoReducer();

// No hacer esto!!!!
// todos.push({
//     id: 2,
//     todo: "Poner a salvo el anillo",
//     done: false,
// });

const newTodo = {
  id: 2,
  todo: "Poner a salvo el anillo",
  done: false,
};

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );
console.log({state: todos});
