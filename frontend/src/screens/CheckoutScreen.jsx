'use client'
import SimpleCheckoutSteps from "@/components/SimpleCheckoutSteps";
import { Container, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


const CheckoutScreen = () => {
  const {cartItems,itemsPrice} = useSelector((state) => state.cart)
  console.log(cartItems);

  const orderHandler = () => {

  }
  return <>
    <SimpleCheckoutSteps step1 step2/>
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
          {cartItems.map( item => (
          <Stack key={item.cartUniqueId} justifyContent='space-between' direction='row'>
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
            <Typography>Shipping</Typography>
             <FormControl fullWidth sx={{flexDirection:'row-reverse'}}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={60}
            name="radio-buttons-group"
            // sx={{flexDirection:'row-reverse'}}
          >
            <FormControlLabel
            labelPlacement="start"
              value={60}
              control={<Radio />}
              label={<div>Inside Dhaka : <Typography sx={{display:'inline'}} color='primary'>৳60</Typography></div>}
            />
            <FormControlLabel
            labelPlacement="start"
              value={100}
              control={<Radio />}
              label={<div>Sub Dhaka : <Typography sx={{display:'inline'}} color='primary'>৳100</Typography></div>}
            />
            <FormControlLabel
            labelPlacement="start"
              value={120}
              control={<Radio />}
              label={<div>Outside Dhaka : <Typography sx={{display:'inline'}} color='primary'>৳120</Typography></div>}
            />
          </RadioGroup>
        </FormControl>
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
