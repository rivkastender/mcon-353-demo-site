import { CheckBox } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  CardActions,
  Button,
  Fab,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState, useContext } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo-reducer";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    //const newTodos = [...oldTodos];
    //const updateTodo = newTodos.find((x) => x.title === todo.title);
    //updateTodo.isComplete = !todo.isComplete;

    //setTodos(newTodos);
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  /*const removeTodo = (todo) => {
    const newTodos = [...oldTodos];
    const updateTodo = newTodos.find((x) => x.title === todo.title);
    newTodos.remove(updateTodo);
    //remove the todo
    setTodos(newTodos);

    console.log(todo);
  };*/

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 85 }} color="text.secondary" gutterBottom>
          TODOS
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Box>
            <TextField
              id="input"
              sx={{ minWidth: 385, maxWidth: 500, pr: 0.5 }}
              label="Enter Todo:"
              onInput={onInput}
              value={input}
            />
            <Fab color="primary" aria-label="add" onClick={addTodo}>
              <AddIcon />
            </Fab>
          </Box>
          {todoState.todos.map((todo, index) => (
            <Typography sx={{ fontSize: 15 }}>
              <p key={index}>
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => toggleChecked(todo)}
                />
                {todo.title}
              </p>
            </Typography>
          ))}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <br />
      <center>
        <Box sx={{ maxWidth: 800, boxShadow: 1, borderRadius: 2 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </center>
    </>
  );
};
