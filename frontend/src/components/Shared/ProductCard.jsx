import styled from "@emotion/styled";
import { FavoriteBorder, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  background: "white",
}));

const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 245,
      }}
    >
      <Box
        sx={{
          position: "relative",
          "&:hover": {
            "& .overLay": {
              opacity: 1,
              color: "red",
            },
          },
        }}
      >
        <CardMedia
          sx={{
            height: 250,
          }}
          image="https://images.unsplash.com/photo-1506915925765-ed31516b9080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <Box
          className="overLay"
          sx={{
            position: "absolute",
            right: "0.5rem",
            top: "1rem",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            transition: "0.2s ease-in",
          }}
        >
          <IconButtonCustom>
            <SearchOutlined />
          </IconButtonCustom>
          <IconButtonCustom>
            <FavoriteBorder />
          </IconButtonCustom>
        </Box>
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography color="secondary.">Dior Sauvage</Typography>
        <Typography fontSize={20} sx={{ fontWeight: "700" }} gutterBottom={2}>
          100TK
        </Typography>
        <Typography></Typography>
        <Button variant="outlined" color="secondary" fullWidth>
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
