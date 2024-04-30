import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
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
      //   console.log(result);
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
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center md:text-4xl text-2xl font-semibold mb-[30px]"
      >
        WellCome Our Site
        <br />
        <span className="mt-[4px]">
          You Can{" "}
          <span style={{ color: "#1ec6b6", fontWeight: "semibold" }}>
            <Typewriter
              words={["CREATE", "EXPLORE", "DELETE", "UPDATE"]}
              loop={true}
              cursor
              cursorStyle="_"
              cursorBlinking={true}
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>{" "}
          Tourist Spot
        </span>
      </h2>

      <p
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-lg text-center pb-3"
      >
        The Business Standard brings you a list of some <br />
        popular places, which are attracting huge tourists
      </p>

      {touristSpots.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
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
