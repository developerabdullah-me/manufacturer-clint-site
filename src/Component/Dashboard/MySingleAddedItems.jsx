import React from 'react';

const MySingleAddedItems = (props) => {
    const {item,productDeleteHandle}= props;
    const {img,price,name,maximumQuantity, minimumQuantity,description}=item;
    return (
        <div>
           <div className="shadow-2xl px-5 py-2 w-80 h-[504px]  mx-auto relative"> 
           <div>
       <img className='w-40 h-40  mx-auto' src={img} alt="" />
       <h1 className='font-bold text-2xl'>{name}</h1>
       <p className='pb-3 '>{description?.slice(0,100)}...</p>
       <p className='font-bold '>Minimum Quantity: <span className='text-red-500'>{minimumQuantity}</span></p>
       <p className='font-bold '>Maximum Quantity:<span className='text-red-500'>{maximumQuantity}</span></p>
       <p className='font-bold '>price : ${price}</p>
       </div>
       
    <div className='absolute bottom-5'>
    <button className="btn rounded"onClick={()=>productDeleteHandle(item._id)}>Delete</button>
    </div>
   </div>
  
        </div>
    );
};

export default MySingleAddedItems;