import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleMyOrder = (props) => {
  const { productDeleteHandle, user } = props;
  const {Id}=useParams()
  const { name, img, address, price, orderQuantity, _id } = user;
  const navigate=useNavigate()
  const payMent=(id) => {
    navigate(`/payMent/${_id}`)  
}
  return (
    <div>
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">
                <h1>Name:{name}</h1>
                <h1>Price{price}</h1>
                <h1>OrderQuantity{orderQuantity}</h1>
              </div>
              <div class="text-sm opacity-50">
                <h1>{address}</h1>
              </div>
            </div>
          </div>
        </td>
        <td>
          <Link to={`/dashboard/payMent/${_id}`} class="btn btn-ghost btn-xs">payment</Link>
        </td>
        <th>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => productDeleteHandle(user._id)}
          >
            cancel
          </button>
        </th>
      </tr>
    </div>
  );
};

export default SingleMyOrder;
