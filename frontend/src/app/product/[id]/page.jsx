"use client";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "next/navigation";
import { useGetProductDetailsQuery } from "@/slices/productsApiSlice";
import Loader from "@/components/loader";
import { useState } from "react";

const PerfumeAmmout = () => {
  const [ammount, setAmmount] = useState("");

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
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  return (
    <Container sx={{ mt: 10 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container columnSpacing={3} rowSpacing={{ xs: 5 }}>
          <Grid item sm={6}>
            <Image
              height={400}
              width={400}
              src={product.image}
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item sm={6}>
            <Stack gap={2}>
              <Typography variant="h3">{product.name}</Typography>
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
      )}
    </Container>
  );
};

export default page;
