import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
const ReviewCard = ({ review }) => {
  const { name, image, description, location } = review;
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      className="mt-14  mb-10"
    >
      <div className="bg-base-100 shadow-xl flex flex-col justify-between rounded-xl  p-5">
        <div>
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full">
              <img src={image} className="mx-auto" />
            </div>
          </div>
          <div className="card-body justify-between gap-5">
            <div className="flex items-center gap-2 justify-center">
              <FaStar color="#ffc662" size={25} />
              <FaStar color="#ffc662" size={25} />
              <FaStar color="#ffc662" size={25} />
              <FaStar color="#ffc662" size={25} />
              <FaStar color="#ffc662" size={25} />
            </div>
            <p className="text-justify h-[200px]">{description}</p>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-center">
            <span className=" font-semibold">{name}</span>,Happy buyer,
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewCard;
