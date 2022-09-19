import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css'
const Header = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/manageItems">ALL PRODUCTS</Link>
      </li>
      <li>
        <Link to="/myBlog">My Blog</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
      <li>
        <Link to="myBlog">My Blog</Link>
      </li>
     

      <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
      <li>
  
        {user ? (
          <div>
            <div className="dropdown dropdown-end mt-7">
              <label tabindex="0" className="p-0  mt-1">
                {user?.photoURL ? (
                  <img className="w-11 rounded-full cursor-pointer" src={user?.photoURL} alt="i" />
                ) : (
                  <h1 className="text-2xl font-bold cursor-pointer border border-2-white rounded-full px-3 py-1 outline-none">
                    {user?.displayName.slice(0, 1)}{" "}
                  </h1>
                )}
              </label>
              <ul
                tabindex="0"
                className="dropdown-content menu p-2 shadow  rounded-box "
              >
                <li>
                  {" "}
                  <button onClick={logout} className=" mt-8 bg-[#060624] text-white ">
                    SignOut
                  </button>
                </li>
                
          
              </ul>
            </div>
          </div>
        ) : (
          <Link to="login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="drawer drawer-end sticky-top">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content  flex flex-col">
          <div className="w-full navbar  sticky-top bg-[#060624] text-white">
            <div className="flex-none lg:hidden">
              <label for="my-drawer-2" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <Link to="/" className="flex-1 px-2 mx-2">

            <div class="text-3xl md:pl-28 pl-7 lg:pl-28">
       Parse_Go
</div>
            </Link>
            <div className="flex-none lg:hidden">
              <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal mb-8">{items}</ul>
            </div>
          </div>

          {/* Content */}
          {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">{items}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
