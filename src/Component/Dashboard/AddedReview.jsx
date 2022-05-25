import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddedReview.css";
const AddedReview = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // const onSubmit = async (data) => {};

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const handleAddReview = (data) => {
    const inputReview = {
      name: data.name,
      rating: data.rating,
      review: data.review,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: Bearer ${localStorage.getItem('accessToken')}
      },
      body: JSON.stringify(inputReview),
    })
      .then((res) => res.json())
      .then((addedReview) => {
        console.log(addedReview);
        if (addedReview.insertedId) {
          toast.success("Your review added successfully");
          reset();
        } else {
          toast.error("Faild to add your review. Please try again.");
        }
      });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto items-center h-max mt-28 mb-20">
        <div className="card-body">
          <h2 className="text-center">Welcome To My Added Review</h2>
          <div>
            <form onSubmit={handleSubmit(handleAddReview)}>
              <div className="form-control flex">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label className="">
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        className="star"
                        color={
                          ratingValue < (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        oneMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <textarea
                  type="text"
                  placeholder="review"
                  name="review"
                  className="input input-bordered w-full max-w-xs"
                  {...register("review", {
                    required: {
                      value: true,
                      message: "yourReview is required",
                    },
                    minLength: {
                      value: 20,
                      message: "your yourReview  must be 20 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.review?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.review.message}
                    </span>
                  )}
                  {errors.review?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.review.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="w-full max-w-xs btn"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedReview;

// import { useState } from "react";
// import "./AddedReview.css";
// import { FaStar } from "react-icons/fa";

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"

// };

// function App() {
//   const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   const stars = Array(5).fill(0)

//   const handleClick = value => {
//     setCurrentValue(value)
//   }

//   const handleMouseOver = newHoverValue => {
//     setHoverValue(newHoverValue)
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined)
//   }

//   const clickable=()=>{
//     console.log('clickable');
//   }
//   return (
//     <div onChange={clickable} style={styles.container}>
//       <h2> React Ratings </h2>
//       <div style={styles.stars}>
//         {stars.map((_, index) => {
//           return (
//             <FaStar
//               key={index}
//               size={24}
//               onClick={() => handleClick(index + 1)}
//               onMouseOver={() => handleMouseOver(index + 1)}
//               onMouseLeave={handleMouseLeave}
//               color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
//               style={{
//                 marginRight: 10,
//                 cursor: "pointer"
//               }}
//             />
//           )
//         })}
//       </div>
//       <textarea
//         placeholder="What's your experience?"
//         style={styles.textarea}
//       />

//       <button
//         style={styles.button}
//       >
//         Submit
//       </button>

//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   stars: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   textarea: {
//     border: "1px solid #a9a9a9",
//     borderRadius: 5,
//     padding: 10,
//     margin: "20px 0",
//     minHeight: 100,
//     width: 300
//   },
//   button: {
//     border: "1px solid #a9a9a9",
//     borderRadius: 5,
//     width: 300,
//     padding: 10,
//   }

// };

// export default App;
