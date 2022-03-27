import { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { addItem } from "../store/features/todo.feature";
import Wrapper from "./Wrapper";

export default function AddNewTodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addItem({ text: inputValue }));
    setInputValue("");
  };

  return (
    <Wrapper>
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
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
    </Wrapper>
  );
}
