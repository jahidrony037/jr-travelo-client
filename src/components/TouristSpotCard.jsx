import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristSpotCard = ({ touristSpot }) => {
  const {
    _id,
    photoUrl,
    touristSpotName,
    averageCost,
    totalVisitorsPerYear,
    travelTime,
    seasonality,
  } = touristSpot;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        <img
          src={photoUrl}
          alt="spot-location"
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />

        <div className="flex flex-col justify-between  p-6 space-y-8 border ">
          <div className="space-y-2 h-[230px]">
            <h2 className="text-3xl font-semibold tracking-wide mb-4">
              {touristSpotName}
            </h2>
            <ul className="space-y-3 mt-4 ml-4">
              <li className="list-disc">Average Cost : {averageCost}</li>
              <li className="list-disc">
                Total Visitor Per Year: {totalVisitorsPerYear}
              </li>
              <li className="list-disc">Travel Time : {travelTime}</li>
              <li className="list-disc">Seasonality : {seasonality}</li>
            </ul>
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

TouristSpotCard.propTypes = {
  touristSpot: PropTypes.object.isRequired,
};

export default TouristSpotCard;
