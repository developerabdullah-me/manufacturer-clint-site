import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "./Addmin/useAdminHoks/useAdmin";
const DashboardSlider = ({ children }) => {
  const [user]= useAuthState(auth);
  const [admin]=useAdmin(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>



         {
           !admin && user && 
           <>
              <li>
              <Link to="/dashboard/myOrder">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/addedReview">Added Review</Link>
            </li>
           
           </>
         }
        {
          admin && <>
            <li>
              <Link to="/dashboard/addProduct">Added Product</Link>
            </li>
            <li>
              <Link to="/dashboard/myAddedItems">My Added Items</Link>
            </li>
            <li>
              <Link to="/dashboard/allUser">All User</Link>
            </li>
          </>
        }
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSlider;
