"use client";
import { useGetProductDetailsQuery } from "@/slices/productsApiSlice";
import { useParams } from "next/navigation";
import React from "react";

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);
  console.log(product);
  return <div>ProductEditScreen</div>;
};

export default ProductEditScreen;
