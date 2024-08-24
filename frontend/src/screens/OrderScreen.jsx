"use client";
import Loading from "@/components/Loading";
import { useGetOrderDetailsQuery } from "@/slices/ordersApiSlice";
import {
  Alert,
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";

import React from "react";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);
  console.log(order);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Alert variant="outlined" severity="error">
      {error.message}
    </Alert>
  ) : (
    <Box bgcolor="#F6F9FC">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h5" padding={2}>
              Shipping
            </Typography>
            <Paper sx={{ padding: 2 }}>
              <List>
                <ListItem>
                  <Typography>
                    <Typography component="span" variant="h6">
                      Name :{" "}
                    </Typography>
                    {order.user.name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <Typography component="span" variant="h6">
                      Email :{" "}
                    </Typography>
                    {order.user.email}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <Typography component="span" variant="h6">
                      Address :{" "}
                    </Typography>
                    {order.shippingAddress.address}
                  </Typography>
                </ListItem>
              </List>
              <Alert severity="info">Not Delivered</Alert>
            </Paper>

            <Typography variant="h5" padding={2}>
              Payment Method
            </Typography>
            <Paper sx={{ padding: 2 }}>
              <List>
                <ListItem>
                  <Typography>
                    <Typography component="span" variant="h6">
                      Method :{" "}
                    </Typography>
                    {order.paymentMethod}
                  </Typography>
                </ListItem>
              </List>
              <Alert severity="info">Not Paid</Alert>
            </Paper>
            <Divider />
            <Typography variant="h5" padding={2}>
              Order Items
            </Typography>
            <Paper sx={{ padding: 2 }}>
              <List>
                {order.orderItems.map((orderItem) => (
                  <ListItem
                    key={orderItem._id}
                    secondaryAction={
                      <Typography>
                        {orderItem.price} * {orderItem.qty} ={" "}
                        {orderItem.price * orderItem.qty}
                      </Typography>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={orderItem.image}></Avatar>
                    </ListItemAvatar>
                    <ListItemText>{orderItem.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" padding={2}>
              Order Summary
            </Typography>
            <Paper>
              <List>
                <ListItem
                  secondaryAction={<Typography>${order.itemsPrice}</Typography>}
                >
                  <ListItemText>Items</ListItemText>
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Typography>${order.shippingPrice}</Typography>
                  }
                >
                  <ListItemText>Shipping</ListItemText>
                </ListItem>
                <ListItem
                  secondaryAction={<Typography>${order.totalPrice}</Typography>}
                >
                  <ListItemText>Total</ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrderScreen;
