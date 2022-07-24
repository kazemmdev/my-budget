import { useState } from "react";

import { TextField, Box, Typography, Container, InputAdornment, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const NewTransaction = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ pt: 5, px: 0 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!open ? (
          <>
            <Button variant="text" aria-label="new transaction" onClick={() => setOpen(true)}>
              <AddIcon color="primary" />
              Add new transacttion
            </Button>
          </>
        ) : (
          <Typography variant="h6">New Transaction</Typography>
        )}
      </Box>

      {open ? (
        <>
          <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
            <TextField sx={{ flex: 2 }} label="Title" />
            <TextField
              label="Amount"
              sx={{ flex: 1 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Box>
          <Box
            sx={{
              pt: 4,
              display: "flex",
              justifyContent: "end",
              gap: 2,
            }}
          >
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained">Save</Button>
          </Box>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
