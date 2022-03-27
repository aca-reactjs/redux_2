import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

import AddNewTodoForm from "./components/AddNewTodoForm";
import TodoList from "./components/TodoList";

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
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <AddNewTodoForm />
        <TodoList />
      </ThemeProvider>
    </div>
  );
}

export default App;
