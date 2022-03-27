import { Typography } from "@mui/material";

export default function ListTitle({ text }) {
  return (
    <Typography variant="h5" component="h2">
      {text}
    </Typography>
  );
}
