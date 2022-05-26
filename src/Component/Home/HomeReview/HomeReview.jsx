import React, { useEffect, useState } from "react";
import HomeSingleReview from "./HomeSingleReview";

const HomeReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReview(data));
  },[]);
  return (
    <div>
     { reviews?.map(review =><HomeSingleReview
                     review={review}
                    key={review._id}
                     ></HomeSingleReview>)
                     
                     }
    </div>
  );
};

export default HomeReview;
