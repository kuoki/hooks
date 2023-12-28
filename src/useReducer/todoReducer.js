export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "ABC":
      throw new Error("No se puede usar ABC");

    default:
      return initialState;
  }
};
