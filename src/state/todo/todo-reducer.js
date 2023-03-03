import { cloneDeep } from "lodash";

export const TodoActions = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] };
    }
    case TodoActions.TOGGLE: {
      let newTodos = cloneDeep(state.todos);
      const updateTodo = newTodos.find((x) => x.title === action.todo.title);
      updateTodo.isComplete = !updateTodo.isComplete;
      return {
        todos: [...newTodos],
      };
    }
  }
};
