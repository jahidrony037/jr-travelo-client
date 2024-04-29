import { useLoaderData, useNavigate } from "react-router-dom";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const TouristSpotCardDetails = () => {
  const touristSpotDetails = useLoaderData() || {};
  // console.log(touristSpotDetails);
  const navigate = useNavigate();
  const {
    photoUrl,
    touristSpotName,
    description,
    countryName,
    location,
    seasonality,
    totalVisitorsPerYear,
  } = touristSpotDetails;

  return (
    <div className="my-12 flex flex-col md:flex-row gap-12 lg:justify-between ">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="rounded-2xl bg-[#1313130D]  lg:w-[48%]"
      >
        <Swiper
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={photoUrl}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={photoUrl}
              alt="image"
              className=" object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={photoUrl}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={photoUrl}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={photoUrl}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[48%]">
        <h1 className="text-[#131313] text-[40px]  leading-none playfair font-bold">
          {touristSpotName}
        </h1>
        <p className="text-[20px] text-[#131313CC] work-sans font-medium mt-4 mb-6">
          Country Name : {countryName}
        </p>

        <div className="border-[1px] border-solid border-[#13131326] my-6"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-12">
            <p className="col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Location :
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {location}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <p className=" col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Seasonality :
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {seasonality}
            </p>
          </div>

          <div className="grid grid-cols-12">
            <p className=" col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              TotalVisitorsPerYear:
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {totalVisitorsPerYear}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <p className=" col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Description:
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[#1ec6b6] border-[1px] text-center"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6]  group-hover:h-full opacity-90 "></span>
            <span className="relative group-hover:text-white font-bold">
              Go Back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCardDetails;
