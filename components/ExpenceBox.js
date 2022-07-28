import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const ExpenceBox = () => {
  const expences = useSelector((state) => state.entries.expences);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        p: 2,
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Typography sx={{ color: "text.secondary" }}>Expences</Typography>
      <Typography sx={{ color: "error.main", fontSize: 34, fontWeight: "medium" }}>{expences}</Typography>
    </Box>
  );
};
