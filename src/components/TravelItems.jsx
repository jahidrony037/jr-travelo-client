import { FaRegStar, FaStar } from "react-icons/fa";

const TravelItems = () => {
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="1600"
        className="mt-[100px] lg:text-5xl md:text-4xl text-3xl font-extrabold text-center leading-relaxed"
      >
        TRAVEL ESSENTIALS{" "}
        <span className="hover:bg-[#a2e3dd] px-2 hover:text-white">ITEMS</span>
      </h1>
      <div className="mt-[100px] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
        <a
          data-aos="flip-left"
          data-aos-duration="1800"
          target="_blank"
          href="https://wanderland.qodeinteractive.com/product-list/cart/"
        >
          <div className="flex flex-col items-center shadow-md rounded py-6 ">
            <div className="hover:shadow-sm rounded-lg ">
              <img
                src="https://i.ibb.co/rmxVGxM/shop-img-18.png"
                className="object-cover md:w-[260px] md:h-[217px] w-[200px] h-[215px]"
                alt="shoes"
              />
            </div>
            <div className="space-y-2">
              <p className="text-center italic text-lg">2000 TK</p>
              <p className="text-center text-2xl font-bold">SHOES</p>
              <div className="flex gap-1 justify-center">
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
              </div>
            </div>
          </div>
        </a>
        <a
          data-aos="flip-left"
          data-aos-duration="1800"
          target="_blank"
          href="https://wanderland.qodeinteractive.com/product/camera-tripod-2/"
        >
          <div className="flex flex-col items-center justify-between shadow-md rounded py-6">
            <div className="hover:shadow-sm rounded-lg ">
              <img
                src="https://i.ibb.co/1KxRkr2/shop-img-17.png"
                className="object-cover md:w-[260px] md:h-[217px] w-[200px] h-[215px]"
                alt="camera"
              />
            </div>
            <div className="space-y-2">
              <p className="text-center italic text-lg">54000 TK</p>
              <p className="text-center text-2xl font-bold">CAMERA TRIPOD</p>
              <div className="flex gap-1 justify-center">
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
              </div>
            </div>
          </div>
        </a>
        <a
          data-aos="flip-left"
          data-aos-duration="1800"
          target="_blank"
          href="https://wanderland.qodeinteractive.com/product/raincoat-2/"
        >
          <div className="flex flex-col items-center shadow-md rounded py-6">
            <div className="hover:shadow-sm rounded-lg ">
              <img
                src="https://i.ibb.co/ZmhnqN5/test-img-02.png"
                className="object-cover md:w-[260px] md:h-[217px] w-[200px] h-[215px]"
                alt="raincoat"
              />
            </div>
            <div className="space-y-2">
              <p className="text-center italic text-lg">1500 TK</p>
              <p className="text-center text-2xl font-bold">RAINCOAT</p>
              <div className="flex gap-1 justify-center">
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
                <FaStar fill="#1ec6b6" />
              </div>
            </div>
          </div>
        </a>
        <a
          data-aos="flip-left"
          data-aos-duration="1800"
          target="_blank"
          href="https://wanderland.qodeinteractive.com/product/dslr-camera-2/"
        >
          <div className="flex flex-col items-center shadow-md rounded py-6">
            <div className="hover:shadow-sm rounded-lg ">
              <img
                src="https://i.ibb.co/SfnwZTD/shop-img-15.png"
                className="object-cover md:w-[260px] md:h-[217px] w-[200px] h-[215px]"
                alt="camera"
              />
            </div>
            <div className="space-y-2">
              <p className="text-center italic text-lg">48000 TK</p>
              <p className="text-center text-2xl font-bold">DSLR CAMERA</p>
              <div className="flex gap-1 justify-center">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </div>
        </a>
        <a
          data-aos="flip-left"
          data-aos-duration="1800"
          target="_blank"
          href="https://wanderland.qodeinteractive.com/product/watter-bottle-2/"
        >
          <div className="flex flex-col items-center shadow-md rounded py-6">
            <div className="hover:shadow-sm rounded-lg ">
              <img
                src="https://i.ibb.co/HYKXhF8/shop-img-16.png"
                className="object-cover md:w-[260px] md:h-[217px] w-[200px] h-[215px]"
                alt="water bottle"
              />
            </div>
            <div className="space-y-2">
              <p className="text-center italic text-lg">500 TK</p>
              <p className="text-center text-2xl font-bold">WATER BOTTLE</p>
              <div className="flex gap-1 justify-center">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TravelItems;
