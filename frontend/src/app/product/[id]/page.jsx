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
import PropTypes from "prop-types";

// PerfumeAmount component for selecting quantity.
const PerfumeAmmout = ({ qty, setQty, price }) => {
  // Handle quantity change.
  const handleChange = (event) => {
    setQty(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Qurantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={qty}
          label="Qurantity"
          onChange={handleChange}
        >
          {price.map(({ ml, price }) => (
            <MenuItem key={ml} value={price}>
              {ml}ML
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

// Page component.
const page = () => {
  const [qty, setQty] = useState("");
  const { id: productId } = useParams();

  // Fetch product details based on the ID.
  const { data: product, isLoading } = useGetProductDetailsQuery(productId);

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
              style={{ objectFit: "contain", width: "100%" }}
              priority={false}
            />
          </Grid>
          <Grid item sm={6}>
            <Stack gap={2}>
              <Typography variant="h4">
                {product.name} | ইলিট কাস্তারী আতর
              </Typography>
              <Typography color="primary" variant="h5" gutterBottom>
                440.00৳ - 1140.00৳
              </Typography>
              <Typography>
                এতে আপনি কস্তুরির সাথে অন্যান্য নোটস ও পাবেন, যেটা ইউনিক,অন্য
                কস্তুরি বেসড আতরের তুলনায়। একটু পর পর নিজের স্মেল প্রোফাইল চেঞ্জ
                করে আমাদের এই কস্তুরি ইলিট। কখনো কস্তুরির মিষ্টি স্মেল, কখনো
                হালকা ফ্লোরাল নোটস, কখনো স্মোকি নোটস। কস্তুরি বেসড সেমি অর্গানিক
                আতরের মধ্যে এটি নির্দ্বিধায় অন্যতম সেরা। লঞ্জেভিটি অনেক ভালো,
                প্রোজেকশন ও চমৎকার।
              </Typography>
              {/* PerfumeAmount component for selecting quantity. */}
              <PerfumeAmmout
                qty={qty}
                setQty={setQty}
                price={product.priceByMl}
              />
              <Typography variant="h4">{qty}৳</Typography>
              <Button variant="contained" onClick={() => console.log(qty)}>
                Add To Cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

PerfumeAmmout.propTypes = {
  qty: PropTypes.number,
  setQty: PropTypes.number,
  price: PropTypes.array,
};

export default page;
