import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

import AddNewTodoForm from "./components/AddNewTodoForm";
import TodoList from "./components/TodoList";
import { Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <ThemeProvider theme={outerTheme}>
        <TodoList />
        <AddNewTodoForm />
      </ThemeProvider>
    </Box>
  );
}

export default App;
