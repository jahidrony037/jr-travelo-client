import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData();
  //   const [allTouristSpot, setAllTouristSpot] = useState(loadedSpot);

  return (
    <div>
      <h2 className="text-center text-4xl">All Tourist Spots</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {allTouristSpot.map((touristSpot) => (
          <TouristSpotCard key={touristSpot?._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
