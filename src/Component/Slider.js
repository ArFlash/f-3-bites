import { Swiper, SwiperSlide } from "swiper/react";
import Photo1 from "../Assets/1674645460243.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Style from "../Style/Slider.module.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <div className={Style.Container}>
      <Swiper
        autoplay={true}
        spaceBetween={500}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={Style.Swiper}
      >
        <SwiperSlide className={Style.SwiperSlide}>
          <img src={Photo1} alt="" className={Style.Img} />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img src={Photo1} alt="" className={Style.Img} />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img src={Photo1} alt="" className={Style.Img} />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img src={Photo1} alt="" className={Style.Img} />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img src={Photo1} alt="" className={Style.Img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
