"use client";
import { Add, Close, Remove, RemoveCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const CartItem = ({ cartItem }) => {
  return (
    <Paper
      sx={{
        p: 2,
        position: "relative",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Image
              alt="complex"
              src={cartItem.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              style={{ objectFit: "contain" }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {cartItem.name}
              </Typography>
              <Stack direction="row" gap={1}>
                <Typography gutterBottom>
                  ৳{cartItem.price} x {cartItem.qty}
                </Typography>
                <Typography color="primary">
                  ৳{cartItem.price * cartItem.qty}
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row">
                <Button variant="contained">
                  <Remove />
                </Button>
                <Box p={1}>1</Box>
                <Button variant="contained">
                  <Add />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <IconButton sx={{ position: "absolute", right: "5px", top: "5px" }}>
        <Close />
      </IconButton>
    </Paper>
  );
};

const SideBar = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography color={grey[500]}>Total : </Typography>
        <Typography fontWeight={600} fontSize={20}>
          $345
        </Typography>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack gap={2}>
        <Typography>Additional Commenct</Typography>
        <TextField id="filled-multiline-static" multiline rows={4} fullWidth />
        <TextField
          id="outlined-password-input"
          label="Voucher"
          type="text"
          autoComplete="voucher"
          fullWidth
        />
        <Button variant="contained" fullWidth>
          Apply Voucher
        </Button>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <div>
        <FormControl fullWidth>
          <FormLabel id="demo-radio-buttons-group-label">Shipping</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={60}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={60}
              control={<Radio />}
              label="Inside Dhaka"
            />
            <FormControlLabel
              value={100}
              control={<Radio />}
              label="Sub Dhaka"
            />
            <FormControlLabel
              value={120}
              control={<Radio />}
              label="Outside Dhaka"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Button variant="contained" fullWidth>
        Checkout Now
      </Button>
    </Paper>
  );
};

const Cart = () => {
  const { cartItems, itemsPrice } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Stack direction={{ sm: "column" }} gap={2}>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem._id} cartItem={cartItem} />
            ))}
          </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
