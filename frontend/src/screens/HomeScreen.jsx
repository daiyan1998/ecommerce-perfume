import BannerSwiper from "@/components/BannerSwiper";
import BestSellingProducts from "@/components/BestSellingProducts";
import Footer from "@/components/Footer";
import { Container } from "@mui/material";

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
