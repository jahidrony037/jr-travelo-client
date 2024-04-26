import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="">
      <Swiper
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Keyboard, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/hKkk5GM/Nilgiri-2-fotor-20240426221954.png"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/657ZctfG/shutterstock-1044182647-scaled-fotor-20240426173116.jpg"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/0Bwc7Bg/wat-arun-in-bangkok-fotor-20240426222259.png"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/qqq39TfS/img-64538962cbd0d-fotor-20240426222655.png"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/50xvSzsx/1597459083-659861-fotor-20240426222926.png"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/tTydvw4G/Angkor-Wat-1-fotor-20240426223233.png"
            alt="image"
            className="w-full lg:h-[600px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
