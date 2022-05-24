import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { AiOutlineEdit } from "react-icons/ai";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="h-full mt-14 w-full px-10">
      <div class="mockup-window border bg-base-300">
        <div className="flex justify-between px-3 items-center mb-10 border-b-2 border-zinc-700 w-12/12">
          <h1 className="stat-title text-3xl px-3 font-bold ">
            {" "}
            My Profile
          </h1>
<button className="btn"><AiOutlineEdit/>Edit</button>
        </div>
        <div class="">
           <div className="flex gap-28 px-5 py-5">

          <div>
          <img className="rounded-full" src={user?.photoURL} alt="" />
          <div className="pt-3">
          <button className=" btn rounded-full">Edit Profile</button>
          </div>
          </div>
           <div className="">
               <h1 className="py-3 font-semibold">Full Name</h1>
               <h1 className="py-1 font-semibold">{user?.displayName}</h1>
               <h1 className="py-3 font-semibold">Email Address</h1>
               <h1 className="py-1 font-semibold">{user?.email}</h1>
           </div>
           </div>
            
            </div>
      </div>
    </div>
  );
};

export default MyProfile;
