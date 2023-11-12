import { Add, Close, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <Stack
      p={2}
      bgcolor="white"
      position="relative"
      height="150px"
      direction={{ md: "row", sm: "column" }}
    >
      <Image
        src="https://images.unsplash.com/photo-1699462514411-b5948b89299f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        height={300}
        width={200}
        style={{ height: "auto", objectFit: "contain" }}
        alt="perfume"
      />
      <IconButton sx={{ position: "absolute", right: "5px", top: "5px" }}>
        <Close />
      </IconButton>
      <Stack justifyContent="space-between">
        <Typography variant="h6">Silver High Neck sweater</Typography>
        <Stack direction="row">
          <Typography>$304</Typography>
          <Typography>$304</Typography>
        </Stack>
        <Stack direction="row">
          <Button variant="outlined">
            <Remove />
          </Button>
          <Box p={1}>1</Box>
          <Button variant="outlined">
            <Add />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const SideBar = () => {
  return (
    <Box p={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Total</Typography>
        <Typography>$345</Typography>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Stack gap={2}>
        <Typography>Additional Commenct</Typography>
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          fullWidth
        />
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
    </Box>
  );
};

const Cart = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container>
        <Grid item md={8}>
          <CartItem />
        </Grid>
        <Grid item bgcolor="white" md={4}>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
