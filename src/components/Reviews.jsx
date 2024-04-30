import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("reviews.json");
      const data = await res.json();
      setReviews(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="lg:text-4xl text-2xl font-bold text-center pb-2"
      >
        REVIEWS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
