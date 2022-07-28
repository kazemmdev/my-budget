import React, { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { EditEntriy } from "./EditEntriy";
import { useDispatch } from "react-redux";
import { removeEntries } from "../../store/entries.actions";

export const EntryItem = ({ id, title, amount }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

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
      <Typography sx={{ color: "text.secondary", fontSize: 18, fontWeight: "medium", flex: 2 }}>{title}</Typography>
      <Typography
        sx={{ color: amount > 0 ? "success.main" : "error.main", fontSize: 18, fontWeight: "medium", flex: 1 }}
      >
        $ {amount}
      </Typography>
      <Stack direction="row" alignItems="center">
        <IconButton aria-label="edit" onClick={() => setEditing(true)}>
          <EditIcon fontSize="small" color="primary" />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => dispatch(removeEntries(id))}>
          <DeleteIcon fontSize="small" color="error" />
        </IconButton>
      </Stack>
      <EditEntriy isOpen={editing} setIsOpen={setEditing} id={id} title={title} amount={amount} />
    </Box>
  );
};
