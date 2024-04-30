import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Countries from "../components/Countries";
import Reviews from "../components/Reviews";
import TravelItems from "../components/TravelItems";
import TouristSpots from "./../components/TouristSpots";

const Home = () => {
  return (
    <div className="space-y-14">
      <Helmet>
        <title>JR|Travelo</title>
      </Helmet>
      <Banner />
      <TouristSpots />
      <Countries />
      <TravelItems />
      <Reviews />
    </div>
  );
};

export default Home;
