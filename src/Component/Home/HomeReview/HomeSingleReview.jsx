import React from 'react';

const HomeSingleReview = (props) => {
    const {review,name,rating}=props.review;
   
    return (
        <div className='shadow-lg mx-auto p-3'>
         
         <h1 className='mt-3 text-2xl font-bold'>{name}</h1>
           
            <h1 className='w-64'>{review?.slice(0,150)}</h1>
           
            <h1 className='mt-3 text-xl font-serif'>Rating: <span className='font-bold'>{rating}</span></h1>
        </div>
    );
};

export default HomeSingleReview;