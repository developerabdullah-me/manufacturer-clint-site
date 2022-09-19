import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleManageItems = (props) => {
    const {product}= props;
    const {name,_id,img,description,price}= product;
    const navigate=useNavigate()
    const {minimumQuantity}= product;
    const {maximumQuantity}= product;

    const newQuantity=parseInt(minimumQuantity)

    const maximumQuantiti=parseInt(maximumQuantity)
      const purchase=(id) => {
        navigate(`/purchase/${_id}`)
    }

    return (
      <div>
      <div className="bg-white border relative  shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[400px] h-[620px] md:h-[530px] lg:h-[530px] mx-auto cursor-pointer hover:shadow-2xl transition">
     <div className="">
     <img className='mb-2 rounded-tl-[80px] h-[250px] ' src={img} alt="" />
     <h1 className='text-xl font-semibold max-w-screen'>{name}</h1>
     <p className='pb-3 '>{description?.slice(0,100)}...</p>
     <div className="flex gap-6 mb-3">
     <p className='font-bold '>Minimum Quantity: <span className='text-red-500'>{newQuantity}</span></p>
     <p className='font-bold '>Maximum Quantity:<span className='text-red-500'>{maximumQuantiti}</span></p>
     </div>
     <p className='font-bold '>price : ${price}</p>
     </div>
   <div className='absolute bottom-2 mt-4'>
   <button onClick={() =>purchase(_id)} className=" bg-[#060624] rounded font-bold text-white py-5 px-11  md:px-[120px] ">Add To pareses</button>
   </div>
 </div>
 </div>
    );
};

export default SingleManageItems;