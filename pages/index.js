import { Box, Typography } from "@mui/material";

import Head from "next/head";
import { Histories } from "../components/History/Histories";
import { NewTransaction } from "../components/NewTransaction";
import { IncomeBox } from "../components/IncomeBox";
import { ExpenceBox } from "../components/ExpenceBox";
import { BalanceBox } from "../components/BalanceBox";

function App() {
  return (
    <>
      <Head>
        <title>My Budget App</title>
      </Head>
      <Box
        component="main"
        sx={{
          py: 8,
          px: 2,
        }}
      >
        <BalanceBox />
        <Box spacing={2} sx={{ gap: 1, pt: 4, display: "flex" }}>
          <IncomeBox />
          <ExpenceBox />
        </Box>
        <Histories />
        <NewTransaction />
      </Box>
    </>
  );
}

export default App;
