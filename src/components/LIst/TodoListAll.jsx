import { useSelector } from "react-redux";
import Wrapper from "../ListWrapper/ListWrapper";

import ListTitle from "../TodoTitle/ListTitle";
import TodoListUI from "./List";
import TodoItem from "../TodoItem/ToDoItem";

export default function TodoListAll() {
  const todoItems = useSelector((state) => state.todo.items);

  return (
    <Wrapper>
      <ListTitle text="All Todos" />

      {todoItems?.length ? (
        <TodoListUI>
          {todoItems.map((item) => (
            <TodoItem key={item.id} {...item} canControl />
          ))}
        </TodoListUI>
      ) : null}
    </Wrapper>
  );
}
