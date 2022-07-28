import { Box, Typography } from "@mui/material";
import { EntryItem } from "./EntryItem";

export const Entries = ({ entries }) => {

  if (entries.length)
    return (
      <Box sx={{ pt: 4 }}>
        <Box py={3}>
          <Typography variant="h5">Histories</Typography>
        </Box>
        <Box spacing={2} sx={{ gap: 1 }}>
          {entries.map((item) => (
            <EntryItem {...item} key={item.id} />
          ))}
        </Box>
      </Box>
    );
};
