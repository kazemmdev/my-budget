import { Box, Typography } from "@mui/material";

export const ExpenceBox = () => {
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
      <Typography sx={{ color: "error.main", fontSize: 34, fontWeight: "medium" }}>98.3</Typography>
    </Box>
  );
};
