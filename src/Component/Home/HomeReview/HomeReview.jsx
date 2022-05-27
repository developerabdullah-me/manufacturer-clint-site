import React, { useEffect, useState } from "react";
import HomeSingleReview from "./HomeSingleReview";

const HomeReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-dawn-06088.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <div className="mockup-window border mt-16">
        <h1 className="border-b-2 pl-10 text-2xl font-bold">OUR CUSTOMER REVIEW</h1>
        <div className="  md:px-28  py-16 grid md:grid-cols-3 sm:grid-cols-1 gap-7  ">
          {[...reviews]
            .reverse()
            .slice(0, 6)
            .map((review) => (
              <HomeSingleReview
                review={review}
                key={review._id}
              ></HomeSingleReview>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
