import { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import { addItem } from "../../store/features/todo.feature";

export default function AddNewTodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    dispatch(addItem({ text: inputValue }));
    setInputValue("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
        width: {
          xs: "100%",
          md: "400px",
        },
        gap: "1rem",
        margin: "1rem",
        maxHeight: "100px",
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField value={inputValue} onChange={handleInputChange} />
        <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}
