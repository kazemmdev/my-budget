import { TextField, Box, Typography, Container, Grid, Stack, IconButton, InputAdornment, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Head from "next/head";

function App() {
  return (
    <>
      <Head>
        <title>My Budget App</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          px: 2,
        }}
      >
        <Container>
          <Typography variant="h2" align="center">
            245.72
          </Typography>
          <Grid container spacing={2} sx={{ gap: 1, pt: 4 }}>
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
              <Typography sx={{ color: "success.main", fontSize: 34, fontWeight: "medium" }}>98.3</Typography>
            </Box>
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
          </Grid>
        </Container>
        <Container sx={{ pt: 4 }}>
          <Box py={3}>
            <Typography variant="h5">Histories</Typography>
          </Box>
          <Grid container direction="column" spacing={2} sx={{ gap: 1 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "text.secondary", fontSize: 18, fontWeight: "medium", flex: 2 }}>
                Shopping
              </Typography>
              <Typography sx={{ color: "success.main", fontSize: 18, fontWeight: "medium", flex: 1 }}>
                $132.3
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
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 2,
                borderRadius: 2,
                p: 2,
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "text.secondary", fontSize: 18, fontWeight: "medium", flex: 2 }}>
                Shopping
              </Typography>
              <Typography sx={{ color: "error.main", fontSize: 18, fontWeight: "medium", flex: 1 }}>$132.3</Typography>
              <Stack direction="row" alignItems="center">
                <IconButton aria-label="edit">
                  <EditIcon fontSize="small" color="primary" />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon fontSize="small" color="error" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Container>
        <Container sx={{ pt: 5, px: 0 }}>
          <Typography variant="h6">New Transaction</Typography>
          <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
            <TextField sx={{ flex: 2 }} label="Description" />
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
            <Button>Cancel</Button>
            <Button variant="contained">Save</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
