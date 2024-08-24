"use client";
import SimpleCheckoutSteps from "@/components/SimpleCheckoutSteps";
import { savePaymentMethod } from "@/slices/cartSlice";
import { FormControl } from "@mui/base";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const [paymentMethod, setPaymentMethod] = React.useState("paypal");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    router.push("/placeorder");
  };
  return (
    <>
      <SimpleCheckoutSteps step1 step2 step3 />
      <Typography variant="h6">Payment Method</Typography>
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Select Payment Method
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={paymentMethod}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="Paypal"
            />
            <FormControlLabel
              value="stripe"
              control={<Radio />}
              label="Stripe"
            />
            <FormControlLabel value="COD" control={<Radio />} label="COD" />
          </RadioGroup>
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Continue
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default page;
