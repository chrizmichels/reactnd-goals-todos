import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("No Bitcoin please");
  }
  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("No Bitcoin please");
  }
  return next(action);
};

export default checker;
