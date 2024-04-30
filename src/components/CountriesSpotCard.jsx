import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountriesSpotCard = ({ countrySpot }) => {
  const {
    photoUrl,
    touristSpotName,
    countryName,
    averageCost,
    description,
    seasonality,
    location,
    _id,
  } = countrySpot;
  //   console.log(countrySpot);
  //   console.log(description.length);
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        <img
          src={photoUrl}
          alt="spot-location"
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />

        <div className="flex flex-col justify-between  p-6 space-y-8 border-2 ">
          <div className="space-y-">
            <h2 className="text-3xl font-semibold tracking-wide mb-4">
              {location}
            </h2>
            <div className="space-y-3 mt-4  h-[200px]">
              <p className="list-disc">
                <span className="font-semibold">Country Name: </span>
                {countryName}
              </p>
              <p className="list-disc">
                <span className="font-semibold">Average Cost: </span>
                {averageCost} Taka
              </p>

              <p className="list-disc font-bold">
                <span className="font-bold">Tourist Spot: </span>
                {touristSpotName}
              </p>
              <p className="list-disc">
                <span className="font-semibold">Seasonality: </span>
                {seasonality}
              </p>
              <p className="list-disc">
                <span className="font-semibold">Short Description: </span>
                {description.length > 45
                  ? `${description.slice(0, 40) + "....."}`
                  : `${description}`}
              </p>
            </div>
          </div>
          <Link
            to={`/allTouristSpot/${_id}`}
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[#1ec6b6] border-[1px] text-center"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6]  group-hover:h-full opacity-90 "></span>
            <span className="relative group-hover:text-white font-bold">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

CountriesSpotCard.propTypes = {
  countrySpot: PropTypes.object.isRequired,
};

export default CountriesSpotCard;
