import { useLoaderData, useParams } from "react-router-dom";
import CountriesSpotCard from "./CountriesSpotCard";

const CountriesAllSpot = () => {
  const countriesSpot = useLoaderData();
  const { countryName } = useParams();
  //   console.log(countriesSpot);
  return (
    <div>
      <h2 className="text-center font-semibold text-3xl mt-10">
        All Tourist Spots of {countryName}
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
        {countriesSpot.map((countrySpot) => (
          <CountriesSpotCard key={countrySpot._id} countrySpot={countrySpot} />
        ))}
      </div>
    </div>
  );
};

export default CountriesAllSpot;
