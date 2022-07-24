import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const HistoryItem = ({ item }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        p: 2,
        flex: 1,
        display: "flex",
        alignItems: "center",
        mb: 1,
      }}
    >
      <Typography sx={{ color: "text.secondary", fontSize: 18, fontWeight: "medium", flex: 2 }}>
        {item.title}
      </Typography>
      <Typography
        sx={{ color: item.amount > 0 ? "success.main" : "error.main", fontSize: 18, fontWeight: "medium", flex: 1 }}
      >
        $ {item.amount}
      </Typography>
      <Stack direction="row" alignItems="center">
        <IconButton aria-label="edit">
          <EditIcon fontSize="small" color="primary" />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="small" color="error" />
        </IconButton>
      </Stack>
    </Box>
  );
};
