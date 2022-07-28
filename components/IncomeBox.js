import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const IncomeBox = () => {
  const incomes = useSelector((state) => state.entries.incomes);

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
      <Typography sx={{ color: "text.secondary" }}>Incomes</Typography>
      <Typography sx={{ color: "success.main", fontSize: 34, fontWeight: "medium" }}>{incomes}</Typography>
    </Box>
  );
};
