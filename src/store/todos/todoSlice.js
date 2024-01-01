import { ADDTODOS } from "../constain/constain";

const initTodo = [{ id: 1, job: "react", completd: false }];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

function todosReducer(state = initTodo, action) {
  switch (action.type) {
    case ADDTODOS: {
      return [
        ...state,
        {
          id: nextTodoId(state),
          job: action.payload.job,
          completd: action.payload.completd,
        },
      ];
    }

    default:
      return state;
  }
}
export default todosReducer;
