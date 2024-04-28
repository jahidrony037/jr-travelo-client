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
      <div>
        <img src={photoUrl} alt="photo" />
      </div>
      <div>
        <h2>{touristSpotName}</h2>
        <p>{averageCost} Taka</p>
        <p>{totalVisitorsPerYear}</p>
        <p>{travelTime}</p>
        <p>{seasonality}</p>
        <Link
          to={`/allTouristSpot/${_id}`}
          className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[#1ec6b6] border-[1px] "
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6]  group-hover:h-full opacity-90 "></span>
          <span className="relative group-hover:text-white font-bold">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  touristSpot: PropTypes.object.isRequired,
};

export default TouristSpotCard;
