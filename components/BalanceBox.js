import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const BalanceBox = () => {
  const balance = useSelector((state) => state.entries.balance);

  return (
    <Typography variant="h2" align="center">
      {balance}
    </Typography>
  );
};
