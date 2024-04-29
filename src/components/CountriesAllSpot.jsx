import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import CountriesSpotCard from "./CountriesSpotCard";
import Loader from "./Loader";

const CountriesAllSpot = () => {
  const countriesSpot = useLoaderData();
  const { countryName } = useParams();
  //   console.log(countriesSpot);
  return (
    <div>
      <Helmet>
        <title>{countryName} AllSpots</title>
      </Helmet>
      <h2 className="text-center font-semibold text-3xl mt-10">
        All Tourist Spots of {countryName}
      </h2>
      {countriesSpot.length ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
          {countriesSpot.map((countrySpot) => (
            <CountriesSpotCard
              key={countrySpot._id}
              countrySpot={countrySpot}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CountriesAllSpot;
