// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner from "./Banner";

const imgURL = [
  "https://images.unsplash.com/photo-1627933234009-0f5ce6eb4e3a?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661690413622-01ae3237b5f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcmZ1bWV8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1617661338085-d1ec6a89a6d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBlcmZ1bWV8ZW58MHwwfDB8fHww",
];

export default function BannerSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgURL.map((imgUrl) => (
          <SwiperSlide key={imgUrl}>
            <Banner imgUrl={imgUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
