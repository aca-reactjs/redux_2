import { useState } from "react";

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  editItem,
  removeItem,
  setEditItemStatus,
} from "../store/features/todo.feature";

export default function TodoList() {
  const [editInputValue, setEditInputValue] = useState("");

  const todoItems = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => () => {
    dispatch(removeItem({ id }));
  };

  const handleEditStatus = (id, text) => () => {
    setEditInputValue(text);

    dispatch(setEditItemStatus({ id }));
  };

  const handleEditInputChange = (event) => {
    setEditInputValue(event.target.value);
  };

  const handleEditFormSubmit = (id) => {
    if (!editInputValue.trim()) {
      return;
    }

    dispatch(editItem({ id, text: editInputValue, isEdit: false }));
    setEditInputValue("");
  };

  return (
    <Wrapper direction="column">
      <Typography variant="h5" component="h2">
        Todo List
      </Typography>
      <List sx={{ width: "100%" }}>
        {todoItems.map(({ id, text, isEdit }) =>
          isEdit ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditFormSubmit(id);
              }}
              key={id}
            >
              <TextField
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={() => {
                  handleEditFormSubmit(id);
                }}
              />
            </form>
          ) : (
            <ListItem
              key={id}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleEditStatus(id, text)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleDelete(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Wrapper>
  );
}
