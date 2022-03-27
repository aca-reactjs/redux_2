import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

import AddNewTodoForm from "./components/Forms/AddNewTodoForm";
import Todo from "./components/Todo/Todo";
import { Box } from "@mui/material";
import RandomDog from "./components/RandomDog/RandomDog";

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
  return (
    <ThemeProvider theme={outerTheme}>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <AddNewTodoForm />
          <Todo />
        </Box>
        <RandomDog />
      </div>
    </ThemeProvider>
  );
}

export default App;
