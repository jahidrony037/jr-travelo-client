import { useEffect, useState } from "react";
import Loader from "./Loader";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://jr-travelo-server.vercel.app/allTouristSpots`
      );
      let result = await res.json();
      console.log(result);
      if (result.length > 6) {
        result = result.slice(0, 6);
      }
      setTouristSpots(result);
    };

    setTimeout(() => {
      loadData();
    }, 500);
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl font-semibold">
        Explore Tourist Spots
      </h2>

      {touristSpots.length ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TouristSpots;
