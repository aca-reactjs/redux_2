import { Paper } from "@mui/material";

export default function Wrapper({ children, direction }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        flexDirection: direction || "row",
        justifyContent: "space-between",
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
