import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountryCard = ({ country }) => {
  const { subCategory, image, short_description } = country;
  return (
    <Link to={`/countries/${subCategory}`}>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        <img
          src={image}
          alt="spot-location"
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />

        <div className="flex flex-col justify-between  p-6 space-y-8 border-2 ">
          <div className="space-y-2 h-[150px]">
            <h2 className="text-3xl font-semibold tracking-wide mb-4">
              {subCategory}
            </h2>
            <ul className="space-y-3 mt-4">
              <li>{short_description}</li>
            </ul>
          </div>
          {/* <Link
            to={`/subCategories/${subCategory}`}
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[#1ec6b6] border-[1px] text-center"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6]  group-hover:h-full opacity-90 "></span>
            <span className="relative group-hover:text-white font-bold">
              View Details
            </span>
          </Link> */}
        </div>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
