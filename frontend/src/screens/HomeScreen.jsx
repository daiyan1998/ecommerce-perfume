import Banner from "@/components/Banner";
import BannerSwiper from "@/components/BannerSwiper";
import BestSellerProduct from "@/components/BestSellerProduct";
import { Container } from "@mui/material";
import React, { useEffect } from "react";

const HomeScreen = () => {
  return (
    <Container>
      <BannerSwiper />
      <BestSellerProduct />
    </Container>
  );
};

export default HomeScreen;
