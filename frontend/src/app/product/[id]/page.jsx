"use client";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PerfumeAmmout = () => {
  const [ammount, setAmmount] = React.useState("");

  const handleChange = (event) => {
    setAmmount(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Qurantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ammount}
          label="Qurantity"
          onChange={handleChange}
        >
          <MenuItem value={10}>3ML</MenuItem>
          <MenuItem value={20}>6ML</MenuItem>
          <MenuItem value={30}>12ML</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
const page = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container columnSpacing={3} rowSpacing={{ xs: 5 }}>
        <Grid item sm={6}>
          <Image
            height={400}
            width={400}
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80"
          />
        </Grid>
        <Grid item sm={6}>
          <Stack gap={2}>
            <Typography variant="h3">Denim Blu</Typography>
            <Typography variant="h4" gutterBottom>
              ৳ 440.00 - ৳ 1140.00
            </Typography>
            <PerfumeAmmout />
            <Typography>
              Description : <br />
              Exquisite rose attar with a rich floral aroma.
            </Typography>
            <Typography variant="h4">৳0</Typography>
            <Button variant="contained">Add To Cart</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default page;
