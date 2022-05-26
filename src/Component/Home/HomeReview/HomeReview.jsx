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
    
                     <div class="mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">

  { [...reviews].reverse().slice(0,6).map(review =><HomeSingleReview
                     review={review}
                    key={review._id}
                     ></HomeSingleReview>)
                     
                     }
  </div>
</div>
    </div>
  );
};

export default HomeReview;
