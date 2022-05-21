import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
const Notfound = () => {
    return (
        <div>
            <div>
                <img className="w-52 mx-auto mt-[200px]" src="https://i.ibb.co/WpCVWzj/404-error-page-not-found-on-website-page-vector-20897697.png" alt="" />
                <h1 className="text-primary text-4xl font-bold text-center"> Oh! Page Not Found</h1>
               <div className="text-center mt-6">
               <Link className="btn mx-auto" to="/"><AiFillHome className='mr-1'/>Go To Home Page</Link>
               </div>
            </div>
        </div>
    );
};

export default Notfound;