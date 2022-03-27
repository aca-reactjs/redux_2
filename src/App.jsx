import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";
import { Fab } from "@mui/material";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>hello</h1>
      <ThemeProvider theme={outerTheme}>
        <Paper
          elevation={3}
          sx={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: {
              xs: "100%",
              md: "400px",
            },
            gap: "1rem",
          }}
        >
          <TextField />
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
