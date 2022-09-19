
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const imageStorageKey = "c55d76ad72c94c8e0b9077518c65d5ef";
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      const image = data.Image[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(result => {
          if (result.success) {
            const img = result.data.url;
            const perse={
              name:data.name,
              email:data?.email,
              pAddress:data.pAddress,
              phoneNumber:data.phoneNumber,
             
              description:data.description,
              img:img
            }
  
            // send to database
            // const url=`https://parse-and-co.onrender.com/pareses`
            fetch('https://parse-and-co.onrender.com/myprofiles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(perse),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          toast.success('Success',data)
  
            })
  
          }
          console.log(result);
         toast.success('Success',data)
        });
    };
    return (
        <div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto items-center h-max mt-28 mb-20">
            <div className="card-body">
              <h2 className="text-center">Please AddProduct your product</h2>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="name"
                      name="name"
                      value={user.displayName}
                      className="input input-bordered w-full max-w-xs"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is required",
                        },
                        pattern: {
                          value: true,
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
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      value={user?.email}
                      className="input input-bordered w-full max-w-xs"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is required",
                        },
                        pattern: {
                          value: /[A-Za-z]{3}/,
                          message: "your email is not required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
  
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">pAddress</span>
                    </label>
                    <input
                      type="text"
                      placeholder="pAddress"
                      name="pAddress"
                      className="input input-bordered w-full max-w-xs"
                      {...register("pAddress", {
                        required: {
                          value: true,
                          message: "pAddress is required",
                        },
                        pattern: {
                          value: true,
                          message: "your pAddress is not required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.pAddress?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.pAddress.message}
                        </span>
                      )}
                      {errors.pAddress?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.pAddress.message}
                        </span>
                      )}
                    </label>
                  </div>
  
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text"> Phone Number</span>
                    </label>
                    <input
                      type="number"
                      placeholder="phoneNumber"
                      name="phoneNumber"
                      className="input input-bordered w-full max-w-xs"
                      {...register(`phoneNumber`, {
                        required: {
                          value: true,
                          message: "phoneNumber is required",
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: "your phoneNumber is not required",
                        },
                      })}
                    />
  
                    <label className="label">
                      {errors.phoneNumber?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.phoneNumber.message}
                        </span>
                      )}
                      {errors.phoneNumber?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.phoneNumber.message}
                        </span>
                      )}
                    </label>
                  </div>
             
  
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="file"
                      placeholder="Image"
                      name="Image"
                      className="input input-bordered w-full max-w-xs"
                      {...register("Image", {
                        required: {
                          value: true,
                          message: "Image is required",
                        },
                        pattern: {
                          value: true,
                          message: "your Image is not required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.Image?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.Image.message}
                        </span>
                      )}
                      {errors.Image?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.Image.message}
                        </span>
                      )}
                    </label>
                  </div>
  
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="description"
                      name="description"
                      className="input input-bordered w-full max-w-xs"
                      {...register("description", {
                        required: {
                          value: true,
                          message: "description is required",
                        },
                        minLength: {
                          value: 20,
                          message: "your description  must be 20 character",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.description?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.description.message}
                        </span>
                      )}
                      {errors.description?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.description.message}
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
        {toast}
      </div>
    );
};

export default UpdateProfile;