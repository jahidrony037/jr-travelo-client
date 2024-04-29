import Banner from "../components/Banner";
import Countries from "../components/Countries";
import TouristSpots from "./../components/TouristSpots";

const Home = () => {
  return (
    <div className="space-y-14">
      <Banner />
      <TouristSpots />
      <Countries />
    </div>
  );
};

export default Home;
