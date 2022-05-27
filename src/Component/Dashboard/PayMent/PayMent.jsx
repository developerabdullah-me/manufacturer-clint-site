import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Sheare/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L3h3ZKwbxSrcaHwu0cmCLchLaHNSYvXbcsmIUpwmFfMTNoFce85QB76DYiK6iSTFXHCMnUDgWqmJabOxr3cAMcS00fw19Dx1j"
);
const PayMent = () => {
  const { Id } = useParams();

  const url = ` https://enigmatic-dawn-06088.herokuapp.com/payment/${Id}`;

  const { data: product, isLoading } = useQuery(["payment", Id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  // console.log(data);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="hero w-full">
        <div className="grid gap-y-5 mx-2">
          <div className="card shadow-2xl bg-transparent">
            <div className="card-body ">
              <h2 className="card-title">Please pay for : {product?.name}</h2>
              <p> Please Pay : ${product.price}</p>
              <p> Delivery Address : {product.address}</p>
            </div>
          </div>

          <div className="card lg:w-[500px] shadow-2xl bg-transparent">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm product={product} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayMent;
