import Head from "next/head";
import { Box, Container } from "@mui/material";
import { Entries } from "../components/Entries/Entries";
import { NewTransaction } from "../components/NewTransaction";
import { IncomeBox } from "../components/IncomeBox";
import { ExpenceBox } from "../components/ExpenceBox";
import { BalanceBox } from "../components/BalanceBox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "../store/entries.actions";

function App() {
  const entries = useSelector((state) => state.entries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>My Budget App</title>
      </Head>
      <Container
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
        <Entries entries={entries} />
        <NewTransaction />
      </Container>
    </>
  );
}

export default App;
