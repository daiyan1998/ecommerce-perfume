import styled from "@emotion/styled";
import { FavoriteBorder, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const IconButtonCustom = styled(IconButton)(({ theme }) => ({
  background: "white",
}));

const ProductCard = ({ product }) => {
  const { name, price, image, _id } = product;
  return (
    <Card
      sx={{
        maxWidth: 245,
        ":hover": {
          boxShadow: "0px 3px 5px black",
        },
      }}
    >
      <Link href={`/product/${_id}`}>
        <CardActionArea>
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
              image={image}
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
        </CardActionArea>
      </Link>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography color="secondary.">{name}</Typography>
        <Typography fontSize={20} sx={{ fontWeight: "700" }} gutterBottom={2}>
          ৳{price}
        </Typography>
        <Typography></Typography>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            ":hover": {
              bgcolor: "black",
              color: "white",
            },
          }}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
