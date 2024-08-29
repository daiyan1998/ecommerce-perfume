"use client";
import Loading from "@/components/Loading";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/slices/productsApiSlice";
import { Delete, EditNote, Visibility } from "@mui/icons-material";
import {
  Alert,
  Button,
  Container,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

const ProductListScreen = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingCreateProduct }] =
    useCreateProductMutation();

  const deleteHandler = () => {};

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <Container sx={{ mt: 10 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">Products</Typography>
        <div>
          <Button
            variant="outlined"
            startIcon={<EditNote />}
            onClick={createProductHandler}
          >
            Create Product
          </Button>
        </div>
      </Stack>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Alert severity="error">{error.message}</Alert>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price Range</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product._id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    ৳{product.priceByMl[0]?.price} - ৳
                    {product.priceByMl[product.priceByMl.length - 1]?.price}{" "}
                  </TableCell>
                  <TableCell>Will add</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton>
                        <EditNote />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton onClick={deleteHandler}>
                        <Delete color="error" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ProductListScreen;
