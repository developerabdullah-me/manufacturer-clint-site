import React from 'react';

const MySingleProfile = (props) => {
    const {name,img,description,phoneNumber,pAddress,email}= props.item;
    return (
        <div>
            <div className="flex gap-28 px-5 py-5">
            <div>
              <img className="rounded-full w-36" src={img} alt="" />
              <div className="pt-3">
                <button className=" btn rounded-full">Edit Profile</button>
              </div>
            </div>
            <div className="">
              <h1 className="py-3 font-semibold">Full Name</h1>
              <h1 className="py-1 font-semibold">{name}</h1>
              <h1 className="py-3 font-semibold">Email Address </h1>
              <h1 className="py-1 font-semibold">{email}</h1>
              <h1 className="py-3 font-semibold">Phone Number</h1>
              <h1 className="py-1 font-semibold">{phoneNumber}</h1>
              <h1 className="py-3 font-semibold">Address </h1>
              <h1 className="py-1 font-semibold">{pAddress}</h1>

              <h1 className="py-3 font-semibold">Description </h1>
              <h1 className="py-1 font-semibold">{description}</h1>


            </div>
          </div>
        </div>
    );
};

export default MySingleProfile;