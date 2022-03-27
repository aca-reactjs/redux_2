import CompletedTodos from "../LIst/CompletedTodos";
import TodoListAll from "../LIst/TodoListAll";

export default function TodoList() {
  return (
    <div style={{ display: "flex" }}>
      <TodoListAll />
      <CompletedTodos />
    </div>
  );
}
