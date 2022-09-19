import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signOut } from "firebase/auth";
import MySingleProfile from "./MySingleProfile";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const myAddedItems = async () => {
      const email = user.email;
      const url = `https://parse-and-co.onrender.com/myprofiles?email=${email}`;
     
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

  
  return (
    <div className="h-full mt-14 w-full px-10">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-between px-3 items-center mb-10 border-b-2 border-zinc-700 w-12/12">
          <h1 className="stat-title text-3xl px-3 font-bold "> My Profile</h1>
          <Link to='/updateProfile' className="btn">
            <AiOutlineEdit />
            Edit
          </Link>
        </div>
        <div className="">
        {[...items]
            .reverse()
            .slice(0, 1).map((item) => <MySingleProfile item={item} key={item._id}></MySingleProfile>)
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
