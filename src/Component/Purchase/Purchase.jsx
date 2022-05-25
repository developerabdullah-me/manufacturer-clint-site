import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { Id } = useParams();
  const [product, setProduct] = useState({});
  const [newQuantity, setNewQuantity] = useState(0);
  const { img, name, description, price, maximumQuantity, minimumQuantity } =
    product;

  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();


  
  
  const handelorder = (data) => {


    const OrderProduct = {
      email: data?.email,
      name: product?.name,
      img: product?.img,
      price:data?.customerQuantity * parseInt(price),
      orderQuantity: data?.customerQuantity,
      phoneNumber: data.phoneNumber,
      address: data.address,
    };
console.log(OrderProduct);
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: Bearer ${localStorage.getItem('accessToken')}
      },
      body: JSON.stringify(OrderProduct),
    })
      .then((res) => res.json())
      .then((placeOrder) => {
        console.log(placeOrder);
        if (placeOrder.insertedId) {
          toast.success("Your order added successfully");
         
        } else {
          toast.error("Faild to add your order. Please try again.");
        }
      });
  };

  // const onSubmit = async () => {

  //   };

  useEffect(() => {
    fetch(`http://localhost:5000/purchaseProduct/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setNewQuantity(data.quantity);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="shadow-lg w-80  mx-auto p-5 mb-7">
          <div className=" ">
            <img className="w-32 mx-auto rounded" src={img} alt="" />
            <div className="text-center">
              <h1> {name} </h1>
              <p> minimumQuantity: {minimumQuantity}</p>
              <p> maximumQuantity: {maximumQuantity}</p>
              <p>price:{price}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(handelorder)}>
            {/* email */}
            <div className="form-control w-full bg-transparent border-0">
              <label className="form-label bg-inherit">Your Email</label>
              <input
                type="email"
                className="input input-bordered w-full bg-transparent text-lg"
                value={user?.email}
                {...register("email", {
                  required: {
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email please",
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

            {/* name */}
            <div className="form-control w-full bg-transparent border-0">
              <label className="form-label">PRODUCT NAME</label>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent text-lg"
                value={name}
                {...register("name", {
                  required: {
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* order quantity */}
            <div className="form-control w-full bg-transparent border-0">
              <label className="form-label">
                MINIMUM ORDER QUANTITY : {minimumQuantity}
              </label>
              <input
                type="number"
                // onBlur={customerQuantityValue}
                className="input input-bordered w-full bg-transparent text-lg"
                {...register("customerQuantity", {
                  required: {
                    value: 10,
                    message: "Add your minimumQuantity 10 quantity please",
                  },
                })}
              />
              <label className="label">
                {errors.customerQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.customerQuantity.message}
                  </span>
                )}
              </label>
            </div>

            {/* phone number */}
            <div className="form-control w-full bg-transparent border-0">
              <label className="form-label">PHONE NUMBER</label>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent text-lg"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone number is reqired",
                  },
                })}
              />
              <label className="label">
                {errors.phoneNumber?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </label>
            </div>

            {/* address */}
            <div className="form-control w-full bg-transparent border-0">
              <label className="form-label">ADDRESS</label>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent text-lg"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is reqired",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>

            <div className="grid py-4 mx-auto">
              <input
                type="submit"
                value="ORDER"
                className="btn btn-outline w-52 mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"
              />
            </div>
          </form>
        </div>
        {toast}
      </div>
    </div>
  );
};

export default Purchase;
