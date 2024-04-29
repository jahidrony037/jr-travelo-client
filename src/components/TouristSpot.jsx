import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristSpot = ({ touristSpot }) => {
  console.log(touristSpot);
  //   const { photoUrl } = touristSpot;
  return (
    <div className="card  glass">
      <figure>
        <img src="" alt="image" className="object-cover h-64 w-full" />
      </figure>
      <div className="card-body pl-6">
        <h2 className="card-title">estate_title</h2>
        <div className="flex justify-between items-center">
          <p>Price: price</p>
        </div>
        <p>Location: location</p>
        {/* <p>
          {description.length > 100
            ? description.slice(0, 100) + ".........."
            : description}
        </p> */}
        <div className="card-actions justify-center mt-5">
          <Link
            // to={`/property/${id}`}
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-bold">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

TouristSpot.propTypes = {
  touristSpot: PropTypes.object.isRequired,
};

export default TouristSpot;
