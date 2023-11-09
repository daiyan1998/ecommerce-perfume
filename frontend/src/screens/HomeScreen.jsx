import Banner from "@/components/Banner";
import BannerSwiper from "@/components/BannerSwiper";
import BestSellerProduct from "@/components/BestSellerProduct";
import React, { useEffect } from "react";

const HomeScreen = () => {
  return (
    <>
      <BannerSwiper />
      <BestSellerProduct />
    </>
  );
};

export default HomeScreen;
