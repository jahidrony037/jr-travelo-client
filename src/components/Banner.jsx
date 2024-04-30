/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAuth from "./../hooks/useAuth";
const Banner = () => {
  const { themeName } = useAuth();
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
          <div
            className={`absolute md:w-3/4 lg:top-20 top-3 md:top-7 space-y-6 left-5  lg:py-8 md:py-6 ${
              themeName === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="md:text-5xl text-3xl font-bold ">BANGLADESH</h2>
            <p className="lg:w-1/2 text-justify text-xs lg:text-sm pr-4">
              Bangladesh, to the east of India on the Bay of Bengal, is a South
              Asian country marked by lush greenery and many waterways. Its
              Padma (Ganges), Meghna and Jamuna rivers create fertile plains,
              and travel by boat is common.
            </p>
          </div>
          <img
            src="https://i.ibb.co/rQTY97Z/184319i8-F63-B0720674-D09-A-v-v2.jpg"
            alt="image"
            className="w-full lg:h-[600px] md:h-[500px] h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`absolute md:w-3/4 lg:top-20 top-3 md:top-7 space-y-6 left-5  lg:py-8 md:py-6 ${
              themeName === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="md:text-5xl text-3xl font-bold uppercase">
              Indonesia
            </h2>
            <p className="lg:w-1/2 text-justify text-xs lg:text-sm pr-4">
              Indonesia, officially the Republic of Indonesia, is a country in
              Southeast Asia and Oceania between the Indian and Pacific oceans.
              It consists of over 17,000 islands, including Sumatra, Java,
              Sulawesi, and parts of Borneo and New Guinea.
            </p>
          </div>
          <img
            src="https://i.ibb.co/c2D6zb2/popular-bali-indonesia-temple-tourist-spot-xrfg2u77kvpyb1e5.jpg"
            alt="image"
            className="w-full lg:h-[600px] md:h-[500px] h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`absolute md:w-3/4 lg:top-20 top-3 md:top-7 space-y-6 left-5  lg:py-8 md:py-6 ${
              themeName === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="md:text-5xl text-3xl font-bold uppercase">
              ThaiLand
            </h2>
            <p className="lg:w-1/2 text-justify text-xs lg:text-sm pr-4">
              Thailand is a Southeast Asian country. It's known for tropical
              beaches, opulent royal palaces, ancient ruins and ornate temples
              displaying figures of Buddha. In Bangkok, the capital, an
              ultramodern cityscape rises next to quiet canalside communities
              and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha
              Temple (Wat Phra Kaew).
            </p>
          </div>
          <img
            src="https://i.ibb.co/chZ4NRy/wat-arun-in-bangkok.jpg"
            alt="image"
            className="w-full lg:h-[600px] md:h-[500px] h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`absolute md:w-3/4 lg:top-20 top-3 md:top-7 space-y-6 left-5  lg:py-8 md:py-6 ${
              themeName === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="md:text-5xl text-3xl font-bold uppercase">
              Malaysia
            </h2>
            <p className="lg:w-1/2 text-justify text-xs lg:text-sm pr-4">
              Malaysia is a Southeast Asian country occupying parts of the Malay
              Peninsula and the island of Borneo. It's known for its beaches,
              rainforests and mix of Malay, Chinese, Indian and European
              cultural influences. The capital, Kuala Lumpur, is home to
              colonial buildings.
            </p>
          </div>
          <img
            src="https://i.ibb.co/2djxv6n/Getty-RF-144552832.jpg"
            alt="image"
            className="w-full lg:h-[600px] md:h-[500px] h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`absolute md:w-3/4 lg:top-20 top-3 md:top-7 space-y-6 left-5  lg:py-8 md:py-6 ${
              themeName === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="md:text-5xl text-3xl font-bold uppercase">
              Vietnam
            </h2>
            <p className="lg:w-1/2 text-justify text-xs lg:text-sm pr-4">
              Vietnam is a Southeast Asian country known for its beaches,
              rivers, Buddhist pagodas and bustling cities. Hanoi, the capital,
              pays homage to the nation’s iconic Communist-era leader, Ho Chi
              Minh, via a huge marble mausoleum. Ho Chi Minh City has French
              colonial landmarks.
            </p>
          </div>
          <img
            src="https://youtravel.me/upload/tours/31546/media/e4c/ugwzbzm1d0dvdjovz2482m1fstht9rvj.jpg"
            alt="image"
            className="w-full lg:h-[600px] md:h-[500px] h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`absolute md:w-3/4 lg:top-20 top-3 md:top-7 space-y-6 left-5  lg:py-8 md:py-6 ${
              themeName === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h2 className="md:text-5xl text-3xl font-bold uppercase">
              Cambodia
            </h2>
            <p className="lg:w-1/2 text-justify text-xs lg:text-sm pr-4">
              Cambodia is a Southeast Asian nation whose landscape spans
              low-lying plains, the Mekong Delta, mountains and Gulf of Thailand
              coastline. Phnom Penh, its capital, is home to the art deco
              Central Market, glittering Royal Palace and the National Museum's.
            </p>
          </div>
          <img
            src="https://i.ibb.co/rmFrxCY/khmer-visit-blogspot-the-royal-palace-7.jpg"
            alt="image"
            className="w-full lg:h-[600px] md:h-[500px] h-[250px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
