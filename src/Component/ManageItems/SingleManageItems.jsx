import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleManageItems = (props) => {
    const {product}= props;
    const {name,_id,quantity,img,description,price}= product;
    const navigate=useNavigate()
      const purchase=(id) => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div className='mx-auto shadow-lg p-4'>
            <img className='w-56 h-64' src={img} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{quantity}</p>
            <p>{price}</p>
            <button onClick={() =>purchase(_id)} className="btn  rounded">Add To pareses</button>
        </div>
    );
};

export default SingleManageItems;