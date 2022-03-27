import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem } from "../store/features/todo.feature";

export default function TodoList() {
  const todoItems = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => () => {
    dispatch(removeItem({ id }));
  };

  return (
    <Wrapper direction="column">
      <Typography variant="h5" component="h2">
        Todo List
      </Typography>
      <List sx={{ width: "100%" }}>
        {todoItems.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
