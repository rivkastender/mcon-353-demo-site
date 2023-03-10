import React, { useState, useContext } from "react";
import {
  Card,
  Box,
  Typography,
  CardContent,
  Fab,
  Checkbox,
  IconButton,
  TextField,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo-reducer";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    if (input != "") {
      todoDispatch({
        type: TodoActions.ADD,
        todo: { title: input, isComplete: false },
      });
      setInput("");
    }
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const removeTodo = (todo) => {
    todoDispatch({
      type: TodoActions.REMOVE,
      todo,
    });
  };

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
            <Typography sx={{ mb: 3.5 }} color="text.secondary"></Typography>
            {todoState.todos.map((todo, index) => (
              <Typography>
                <ListItem
                  sx={{ minWidth: 385, maxWidth: 435, pr: 0.5 }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeTodo(todo)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={todo.isComplete}
                      onChange={() => toggleChecked(todo)}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={todo.title} />
                </ListItem>
              </Typography>
            ))}
          </Box>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <>
      <br />
      <center>
        <Box sx={{ maxWidth: 800, boxShadow: 1, borderRadius: 2 }}>
          <Card sx={{ minHeight: 560 }} variant="outlined">
            {card}
          </Card>
        </Box>
      </center>
    </>
  );
};
