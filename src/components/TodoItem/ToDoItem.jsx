import { ListItem, ListItemText, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../../store/features/todo.feature";

export default function TodoItem({
  id,
  text,
  isEdit,
  isCompleted,
  canControl,
}) {
  const [editInputValue, setEditInputValue] = useState("");

  const dispatch = useDispatch();

  const handleDelete = (id) => (e) => {
    e.stopPropagation();
    dispatch(removeItem({ id }));
  };

  const handleEditStatus = (id, text) => (e) => {
    e.stopPropagation();

    setEditInputValue(text);

    dispatch(editItem({ id, isEdit: true }));
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

  const handleCompleteStatus = (id) => () => {
    if (!canControl) {
      return;
    }
    dispatch(editItem({ id, isCompleted: !isCompleted }));
  };

  return isEdit ? (
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
      style={{
        textDecoration: isCompleted ? "line-through" : "none",
      }}
      key={id}
      onClick={handleCompleteStatus(id)}
      secondaryAction={
        canControl ? (
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
        ) : null
      }
    >
      <ListItemText primary={text} />
    </ListItem>
  );
}
