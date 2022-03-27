import { List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCompletedTodos } from "../../store/features/todo.feature";
import ListTitle from "../TodoTitle/ListTitle";
import Wrapper from "../ListWrapper/ListWrapper";

export default function CompletedTodos() {
  const completedTodos = useSelector(selectCompletedTodos);

  return (
    <Wrapper direction={"column"}>
      <ListTitle text="Completed Todos" />
      <List sx={{ width: "100%" }}>
        {completedTodos.map((value) => {
          return (
            <ListItem key={value.id}>
              <ListItemText primary={value.text} />
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}
