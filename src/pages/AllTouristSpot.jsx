import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

const AllTouristSpot = () => {
  const loadedSpot = useLoaderData();
  const [allTouristSpot, setAllTouristSpot] = useState(loadedSpot);

  const handleSort = () => {
    // console.log("amare sort marse");
    const fetchData = async () => {
      const res = await fetch(
        `https://jr-travelo-server.vercel.app/allTouristSpot/sort`
      );
      const result = await res.json();
      setAllTouristSpot(result);
    };
    fetchData();
  };

  return (
    <div>
      <Helmet>
        <title>AllTouristSpot</title>
      </Helmet>
      <h2 className="text-center text-4xl mb-[50px]">All Tourist Spots</h2>
      <div className="flex flex-row justify-center mt-8">
        <div className="dropdown dropdown-hover ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#1ec6b6] text-[#FFFFFF] text-lg font-semibold"
          >
            Sort By <MdKeyboardArrowDown size={30} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-2xl text-[#FFFFFF] font-medium bg-[#1ec6b6]  rounded-box w-44"
          >
            <li onClick={() => handleSort()}>
              <a>Average Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-20">
        {allTouristSpot.map((touristSpot) => (
          <TouristSpotCard key={touristSpot?._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
