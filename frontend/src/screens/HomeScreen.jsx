import BannerSwiper from "@/components/BannerSwiper";
import BestSellingProducts from "@/components/BestSellingProducts";
import Footer from "@/components/Footer";
import { Container } from "@mui/material";
import React, { useEffect } from "react";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <BannerSwiper />
        <BestSellingProducts />
      </Container>
      <footer style={{ backgroundColor: "black", marginTop: "2rem" }}>
        <Footer />
      </footer>
    </>
  );
};

export default HomeScreen;
