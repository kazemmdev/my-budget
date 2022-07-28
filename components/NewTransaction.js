import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Box, Typography, Container, InputAdornment, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addEntries } from "../store/entries.actions";

export const NewTransaction = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const addNew = () => {
    if (title) dispatch(addEntries(title, amount));

    closForm();
  };

  const closForm = () => {
    setOpen(false);
    setTitle("");
    setAmount(0);
  };

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
            <TextField
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ flex: 2 }}
              label="Title"
            />
            <TextField
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
            <Button onClick={closForm}>Cancel</Button>
            <Button variant="contained" onClick={addNew}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
