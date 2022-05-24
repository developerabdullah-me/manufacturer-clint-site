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
             <div className='mx-auto shadow-lg p-4'>
            <img className='w-56 h-64' src={img} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{newQuantity}</p>
            <p>{maximumQuantiti}</p>
            <p>{price}</p>
            <button onClick={() =>purchase(_id)} className="btn  rounded">Add To pareses</button>
        </div>
        </div>
    );
};

export default HomeSingleProduct;