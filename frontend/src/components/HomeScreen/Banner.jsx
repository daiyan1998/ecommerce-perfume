import styled from "@emotion/styled";
import { Button, Container, Typography } from "@mui/material";
import React from "react";

const imgURL =
  "https://images.unsplash.com/photo-1617661338085-d1ec6a89a6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

const Background = styled("div")(({ theme }) => ({
  backgroundImage: `url(${imgURL})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "red",
  height: "800px",
  width: "100%",
  objectFit: "contain",
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
}));

const Banner = () => {
  return (
    <Background>
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Style Destination</Typography>
        <Typography variant="h1">Special Perfume</Typography>
        <Typography variant="h6">
          Aliqua id fugiat irure ex duis ea quis id quis ad et. <br /> Sunt qui
          esse pariatur duis deserunt
        </Typography>
        <Button variant="outlined" size="large" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </Container>
    </Background>
  );
};

export default Banner;
