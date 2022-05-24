import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomeSingleProduct = (props) => {
    const {product}= props;
    const {name,_id,img,description,price}= product;
    const {minimumQuantity}= product;
    const {maximumQuantity}= product;

    const newQuantity=parseInt(minimumQuantity)

    const maximumQuantiti=parseInt(maximumQuantity)
   
    const navigate=useNavigate()
      const purchase=(id) => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div>
             <div className="shadow-2xl px-3 py-2 w-80 h-[504px]  mx-auto relative">
            <div>
            <img className='w-56 h-56 mx-auto' src={img} alt="" />
            <h1 className='font-bold text-2xl'>{name}</h1>
            <p className=' '>{description?.slice(0,100)}...</p>
            <p className='font-bold '>Minimum Quantity: <span className='text-red-500'>{newQuantity}</span></p>
            <p className='font-bold '>Maximum Quantity:<span className='text-red-500'>{maximumQuantiti}</span></p>
            <p className='font-bold '>price : ${price}</p>
            </div>
          <div className='absolute bottom-5'>
          <button onClick={() =>purchase(_id)} className="btn  rounded ">Add To pareses</button>
          </div>
        </div>
        </div>
    );
};

export default HomeSingleProduct;