import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddedReview.css";
const AddedReview = () => {
  

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const handleAddReview = (data) => {
    const inputReview = {
      
      name:data?.name,
      rating:data?.rating,
      review: data.review,
    };

    fetch("https://parse-and-co.onrender.com/review", {
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
             
            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="rating"
                    name="rating"
                    className="input input-bordered w-full max-w-xs"
                    {...register("rating", {
                      required: {
                        value: true,
                        message: "rating is required",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: "your rating is not required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.rating?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.rating.message}
                      </span>
                    )}
                    {errors.rating?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.rating.message}
                      </span>
                    )}
                  </label>
                </div>

            <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={user?.displayName}
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: "your name is not required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
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
                      value: /A-z/,
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

