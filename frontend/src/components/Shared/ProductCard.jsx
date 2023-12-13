import React, { useState } from "react";
import PropTypes from "prop-types";
import { Close, FavoriteBorder, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";

const ProductCard = ({ product,isLoading }) => {
  const { name, priceRange, image, _id } = product;
  const [addToCartOverLay, setAddToCartOverlay] = useState(false);

  // @desc  add overlay animation to card
  const toggleoverlay = () => {
    setAddToCartOverlay(!addToCartOverLay);
  };

  const OverlayQTY = () => {
    return (
      <Box
        sx={{
          position: "relative",
          transition: "0.2s ease-in",
          zIndex: "50",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            right: "5px",
            top: "5px",
          }}
          onClick={toggleoverlay}
        >
          <Close />
        </IconButton>
        <Button
          sx={{
            position: "absolute",
            bottom: "0",
          }}
        >
          Add To Cart
        </Button>
      </Box>
    );
  };

  // if(isLoading) {
  //   return (
  //     <Card>
  //       <Skeleton variant="rect" height={200} />
  //       <CardContent>
  //         <Skeleton />
  //         <Skeleton width="60%" />
  //       </CardContent>
  //     </Card>
  //   )
  // }
  return (
    <Card
      sx={{
        // maxWidth: 245,
        ":hover": {
          // boxShadow: "0px 3px 5px black",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          "&:hover": {
            "& .overLay": {
              opacity: 1,
            },
            "& .overLayButton": {
              height: "35px",
              opacity: 1,
            },
          },
        }}
      >
        <Link href={`/product/${_id}`}>
          {isLoading? (
            <Skeleton sx={{ height: 250 }} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia
              sx={{
                height: 250,
              }}
              image={image}
            />
          )}
        </Link>
        {!addToCartOverLay && (
          <>
            <Box
              className="overLay"
              sx={{
                position: "absolute",
                backgroundColor: "white",
                p: 1,
                right: "0.5rem",
                top: "1rem",
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "0.2s ease-in",
              }}
            >
              <SearchOutlined />
              <FavoriteBorder />
            </Box>
            {/* <Button
              className="overLayButton"
              sx={{
                position: "absolute",
                bottom: "0",
                right: "0",
                left: "0",
                height: "0px",
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "0.2s ease-out",
              }}
              variant="contained"
              onClick={toggleoverlay}
            >
              Add To Cart
            </Button> */}
          </>
        )}
        {addToCartOverLay && (
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "white",
              height: `${addToCartOverLay ? "100%" : "0%"}`,
              transition: "0.2s ease-out",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {/* <OverlayQTY /> */}
          </Box>
        )}
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        {isLoading? (
          <Skeleton animation='wave'/>
        ):(
        <Typography color="secondary.">{name}</Typography>
        )}
        {isLoading? (
          <Skeleton animation='wave'/>
        ) : (
        <Typography fontSize={20} sx={{ fontWeight: "700" }} gutterBottom>
          {priceRange}৳
        </Typography>
        )}
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
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
