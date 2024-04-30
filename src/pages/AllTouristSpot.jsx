import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  //   const [allTouristSpot, setAllTouristSpot] = useState(loadedSpot);

  return (
    <div>
      <Helmet>
        <title>AllTouristSpot</title>
      </Helmet>
      <h2 className="text-center text-4xl mb-[50px]">All Tourist Spots</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
        {allTouristSpot.map((touristSpot) => (
          <TouristSpotCard key={touristSpot?._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
