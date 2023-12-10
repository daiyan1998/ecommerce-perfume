import React from "react";
import { useGetProductsQuery } from "@/slices/productsApiSlice";
import { Typography } from "@mui/material";

import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';
import ProductCard from "./Shared/ProductCard";

const BestSellingProducts = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log(products);
  return (
    <>
      <Typography variant="h4" textAlign='center' my={5}>Best Selling Products</Typography>
      <Swiper
        slidesPerView = {4}
        spaceBetween= {30}
         pagination={{
          clickable: true,
        }}
        navigation={true}
        modules = {[Navigation,Pagination]}
      >
        {
          products?.map(product => (
            <SwiperSlide key={product}>
              <ProductCard product = {product}/>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  );
};

export default BestSellingProducts;
