/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineRequestPage } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { RiHomeSmileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="mb-10 px-2 md:px-0">
      <Helmet>
        <title>about</title>
      </Helmet>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className={` bg-no-repeat object-contain bg-contain h-auto flex justify-center items-center lr relative`}
      >
        <div>
          <img
            src="https://i.ibb.co/Lv24krk/c3ef8576850138cf7602e79edbc5bb57.jpg"
            alt="team-image"
            className="w-full h-auto object-cover brightness-50"
          />
        </div>
        <h2 className="md:text-[52px] text-xl text-center text-white absolute">
          More About US
        </h2>
      </div>

      <div
        className=" mt-[100px]"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h2 className="text-center text-[34px] mb-7">About our company</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:text-left text-justify gap-y-14 ">
          <div>
            <h3 className="text-[20px] font-bold">Our Mission</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              Our mission is to inspire, inform, and empower travelers to
              explore the world with confidence and curiosity. Through our
              comprehensive guides, expert advice, and curated recommendations,
              we aim to connect individuals with unforgettable destinations,
              enriching cultural experiences, and sustainable travel
              opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Our Vision</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              Our vision is to become the ultimate online destination for
              travelers worldwide, offering an immersive and personalized
              experience that inspires, informs, and facilitates seamless
              exploration of diverse destinations. We aim to harness the power
              of technology to connect travelers with authentic experiences,
              hidden gems, and local cultures, fostering a deeper appreciation
              for the world around us.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Our Values</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              Discover your next adventure with our comprehensive tourism
              website. From breathtaking destinations to insider tips, our
              platform offers a seamless experience for travelers seeking
              unforgettable experiences. Explore captivating content, plan your
              itinerary with ease, and embark on memorable journeys with
              confidence.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Our Resources</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              Crafting a captivating tourism website requires the right blend of
              design, functionality, and engaging content. From user-friendly
              web development platforms like WordPress to stunning templates
              from ThemeForest, there's a wealth of resources available.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[200px]">
        <div className="grid md:grid-cols-12 items-center   gap-14 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:col-span-6 grid grid-cols-12 md:gap-4 gap-2"
          >
            <div className="col-span-4 ">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71gHZ3xOnDL._AC_SL1500_.jpg"
                alt="view-image"
                className="object-cover  h-[564px] rounded-[20px]"
              />
            </div>
            <div className="col-span-4">
              <img
                src="https://www.earth-essentials.co.uk/wp-content/uploads/2018/02/pexels-photo-672358-1.jpeg"
                alt="slider-image"
                className="h-[564px] w-auto object-cover rounded-[20px]"
              />
            </div>
            <div className="col-span-4">
              <img
                src="https://i.pinimg.com/originals/21/53/c6/2153c6b40ac5949a0925ebdb6a0714a3.jpg"
                alt="dalan-image"
                className="h-[564px] w-auto object-cover rounded-[20px]"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:col-span-6"
          >
            <h2 className="text-[34px] font-bold">
              Find your new Visit Spot <br /> with us
            </h2>
            <p className="text-[17px] py-10">
              You can contact us through various social site and we arrange a
              tour and you also added your favorite tourist spots
            </p>
            <div className="grid md:grid-cols-2 gap-5 ">
              <div className="flex items-center gap-5">
                <div>
                  <PiHandshakeLight size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Give A Tour Plan</p>
                  <p className="text-[14px] font-normal">free service</p>
                </div>
              </div>
              <div className="flex items-center  gap-5">
                <div>
                  <BsGraphUpArrow size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">
                    Manage a Tourist Spot
                  </p>
                  <p className="text-[14px] font-normal">No fees asked</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <MdOutlineRequestPage size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Free Appraisal</p>
                  <p className="text-[14px] font-normal">No fees asked</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <RiHomeSmileFill size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Free Photoshoot</p>
                  <p className="text-[14px] font-normal">
                    Professional service
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left mt-10">
              <Link
                to="/contact"
                className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[1px] border-[#1ec6b6]"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white font-bold">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
