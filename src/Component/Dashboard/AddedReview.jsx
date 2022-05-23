import React from "react";
import { useForm } from "react-hook-form";

const AddedReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto items-center h-max mt-28 mb-20">
        <div className="card-body">
          <h2 className="text-center">Welcome To My Added Review</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <textarea
                  type="text"
                  placeholder="yourReview"
                  name="yourReview"
                  className="input input-bordered w-full max-w-xs"
                  {...register("yourReview", {
                    required: {
                      value: true,
                      message: "yourReview is required",
                    },
                    minLength: {
                      value: 50,
                      message: "your yourReview  must be 50 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.yourReview?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.yourReview.message}
                    </span>
                  )}
                  {errors.yourReview?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.yourReview.message}
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
