import { Paper } from "@mui/material";

export default function ListWrapper({ children }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
        width: {
          xs: "100%",
          md: "400px",
        },
        gap: "1rem",
        margin: "1rem",
      }}
    >
      {children}
    </Paper>
  );
}
