"use client";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "next/navigation";
import { useGetProductDetailsQuery } from "@/slices/productsApiSlice";
import Loader from "@/components/loader";
import { useRef, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { addToCart } from "@/slices/cartSlice";
import { useDispatch } from "react-redux";

// Page component.
const ProductScreen = () => {
  const [price, setPrice] = useState("");
  // const [priceAndMl, setPriceAndMl] = useState({
  //   price,
  //   ml,
  // });
  const dispatch = useDispatch();
  const perfumeSize = useRef();

  // @desc Use state to track the input value.
  const [qty, setQty] = useState(1);
  const { id: productId } = useParams();

  // @desc Fetch product details based on the ID.
  const { data: product, isLoading } = useGetProductDetailsQuery(productId);

  // @desc Function to increase the quantity.
  const increaseQuantity = () => {
    setQty(qty + 1);
  };

  // @desc Function to decrease the quantity.
  const decreaseQuantity = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  // @desc Handle price change.
  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty, price }));
  };
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
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Quantity</InputLabel>
                  {/* selecting perfume price by clicking on ml */}
                  <Select
                    value={price}
                    label="Quantity"
                    onChange={handleChange}
                  >
                    {product.priceByMl.map((x) => (
                      <MenuItem
                        key={x.ml}
                        value={x.price}
                        onClick={console.log(x)}
                      >
                        {x.ml}ML
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Typography variant="h4">{price}৳</Typography>
              <Box display="flex" gap={2}>
                <ButtonGroup variant="contained">
                  <Button onClick={decreaseQuantity}>
                    <Remove />
                  </Button>
                  <Input value={qty} sx={{ width: "3rem", px: "5px" }} />
                  <Button onClick={increaseQuantity}>
                    <Add />
                  </Button>
                </ButtonGroup>
                <Button
                  variant="contained"
                  disabled={!price}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ProductScreen;
