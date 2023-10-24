"use client";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductCard from "./Shared/ProductCard";
import styled from "@emotion/styled";
import { useGetProductsQuery } from "@/slices/productsApiSlice.js";
import Loader from "./Loader";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// @desc  My Custom
const TabCustom = styled(Tab)(() => ({}));
const BestSeller = () => {
  const [value, setValue] = useState(0);

  // @desc  Fetch Products
  const { data: products, isLoading } = useGetProductsQuery();

  // @desc  Tabs value change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" align="center" mt={10} mb={5}>
        Our Best Seller
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            centered
          >
            <TabCustom label="NEW ARRIVALS" {...a11yProps(0)} />
            <TabCustom label="BEST SELLERS" {...a11yProps(1)} />
            <TabCustom label="TOP RATES" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CustomTabPanel value={value} index={0}>
              <Grid container rowSpacing={2}>
                {products.map((product, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    {/*desc ProductCard component */}
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid container rowSpacing={2}>
                {products.slice(0, 2).map((product, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    {/*desc ProductCard component */}
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Grid container rowSpacing={2}>
                {products.slice(0, 1).map((product, i) => (
                  <Grid xs={12} sm={6} md={4} lg={3} key={i}>
                    {/*desc ProductCard component */}
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
          </>
        )}
      </Box>
    </Container>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default BestSeller;
