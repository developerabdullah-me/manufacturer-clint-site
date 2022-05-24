import React from 'react';

const MySingleAddedItems = (props) => {
    const {item,productDeleteHandle}= props;
    const {img,price,name,quantity}=item;
    return (
        <div>
           <div className="" data-aos="flip-right"> 
   
   <div className="shadow-2xl px-3 py-2 w-80 mx-auto">
   <img className="w-96 h-96"src={img} alt=" " />
     <h1>{name}</h1>
     <p>price:${price}</p>
     <p>quantity:{quantity}</p>
     <button className="btn rounded"onClick={()=>productDeleteHandle(item._id)}>Delete</button>
   </div>
  

   </div> 
        </div>
    );
};

export default MySingleAddedItems;