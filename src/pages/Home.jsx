import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Countries from "../components/Countries";
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
    </div>
  );
};

export default Home;
