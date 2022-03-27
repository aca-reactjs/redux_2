import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";

export default function TodoList() {
  const todoItems = useSelector((state) => state.todo.items);

  return (
    <Wrapper direction="column">
      <Typography variant="h5" component="h2">
        Todo List
      </Typography>
      <List sx={{ width: "100%" }}>
        {todoItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
