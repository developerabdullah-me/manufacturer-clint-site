import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axios from "axios";
import MySingleAddedItems from "./MySingleAddedItems";

const MyAddedItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const myAddedItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myAddedItems?email=${email}`;
      // const url = `http://localhost:5000/pareses`;
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
    myAddedItems();
  }, [user]);

  const productDeleteHandle = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/pareses/${id}`;
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
    <div className="px-20 h-full w-full">
      <h1 className="text-center mx-auto text-4xl mb-5 font-bold border-b-2 border-zinc-600 w-6/12">
        My Added Items{items.length}
      </h1>

      <div className="grid md:grid-cols-3 gap-7 sm:grid-cols-3">
        {items.map((item) => (
          <MySingleAddedItems
            item={item}
            key={item._id}
            productDeleteHandle={productDeleteHandle}
          ></MySingleAddedItems>
        ))}
      </div>
    </div>
  );
};

export default MyAddedItems;
