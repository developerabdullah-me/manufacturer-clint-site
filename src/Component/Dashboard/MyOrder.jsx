import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import SingleMyOrder from "./SingleMyOrder";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const myOrder = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;

      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    myOrder();
  }, [user]);

  const productDeleteHandle = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter(
            (InventoryItems) => InventoryItems._id !== id
          );
          setItems(remaining);
        });
    }
  };


  return (
    <div className="w-full h-full">
      <h1>my order {items.length}</h1>

      <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            {/* <th>SL</th> */}
                            <th className='text-xl font-bold'>Details</th>
                            
                            <th className='text-xl font-bold'>Payment</th>
                            <th className='text-xl font-bold'>cancel</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                        items?.map(user => <SingleMyOrder
                        key={user._id}
                        user={user}
                        productDeleteHandle={productDeleteHandle}
                        ></SingleMyOrder>)
                        }
                    </tbody>
                </table>
            </div>

    </div>
  );
};

export default MyOrder;
