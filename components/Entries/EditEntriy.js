import { Box, Button, InputAdornment, Modal, TextField } from "@mui/material";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateEntries } from "../../store/entries.actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export const EditEntriy = ({ title, amount, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState(title);
  const [editAmount, setEditAmount] = useState(amount);

  const handleUpdate = () => {
    dispatch(updateEntries(id, editTitle, editAmount));
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
          <TextField
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            sx={{ flex: 2 }}
            label="Title"
          />
          <TextField
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
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
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={() => handleUpdate()} variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
