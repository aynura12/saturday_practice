import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../components/slider.scss";
const Slider = () => {
  return (
    <div>
      <Swiper
        className="slider"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      
      >
        <SwiperSlide className="slider1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider_text">
                  <p>Floral</p> <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider_text">
                  <p>Fixed-Height Slider</p> <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider_text">
                  <p>Floral</p> <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
