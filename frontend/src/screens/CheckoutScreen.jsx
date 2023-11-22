'use client'
import CheckoutSteps from "@/components/CheckoutSteps";
import { Container, Divider, FormControl, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckoutScreen = () => {
  const {cartItems,itemsPrice} = useSelector((state) => state.cart)
  console.log(cartItems);

  const orderHandler = () => {

  }
  return <>
    <CheckoutSteps step1 step2/>
    <Container>
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Typography fontSize={30} my={5}>Billing Details</Typography>
        <FormControl fullWidth>
          <Stack gap={3}>
          <TextField fullWidth required label='Name'/>
          <TextField fullWidth required label='Address'/>
          <TextField fullWidth required label='Phone'/>
          <TextField fullWidth multiline rows={4} label='Order Notes (Optional)' />
          </Stack>
        </FormControl>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography fontSize={30} my={5}>Your Order</Typography>
        <Stack gap={2}>
          <Stack justifyContent='space-between' direction='row'>
            <Typography fontSize={30}>PRODUCT</Typography>
            <Typography fontSize={30}>SUBTOTAL</Typography>
          </Stack>
          <Divider/>
          {cartItems.map( item => (
          <Stack justifyContent='space-between' direction='row'>
            <Typography>{item.name} - {item.ml}ml x {item.qty}</Typography>
            <Typography>৳{item.price * item.qty}</Typography>
          </Stack>
          ))}
          <Divider/>
          <Stack justifyContent='space-between' direction='row'>
            <Typography>Subtotal</Typography>
            <Typography>৳{itemsPrice}</Typography>
          </Stack>
          <Divider/>
          <Stack justifyContent='space-between' direction='row'>
            <Typography>Product</Typography>
            <Typography>Subtotal</Typography>
          </Stack>
          <Divider/>
          <Stack justifyContent='space-between' direction='row'>
            <Typography>Total</Typography>
            <Typography></Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
    </Container>
  </>;
};

export default CheckoutScreen;
