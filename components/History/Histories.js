import React from "react";
import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { HistoryItem } from "./HistoryItem";

const items = [
  { id: 1, title: "Shopping", amount: 200 },
  { id: 2, title: "Shopping1", amount: 100.56 },
  { id: 3, title: "Shopping2", amount: -200 },
];

export const Histories = () => {
  return (
    <div>
      <Box sx={{ pt: 4 }}>
        <Box py={3}>
          <Typography variant="h5">Histories</Typography>
        </Box>
        <Grid direction="column" spacing={2} sx={{ gap: 1 }}>
          {items.map((item) => (
            <HistoryItem item={item} key={item.id} />
          ))}
        </Grid>
      </Box>
    </div>
  );
};
