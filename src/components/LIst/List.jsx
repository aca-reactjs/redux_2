import List from "@mui/material/List";

export default function TodoListUI({ children }) {
  return <List sx={{ width: "100%" }}>{children}</List>;
}
