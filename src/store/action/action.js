import { ADDTODOS } from "../constain/constain";


export const actionAddTodo = (payload) => {
  return {
    type: ADDTODOS,
    payload,
  };
};
