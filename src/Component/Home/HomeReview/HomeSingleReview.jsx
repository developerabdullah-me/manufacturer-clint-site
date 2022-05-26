import React from 'react';

const HomeSingleReview = (props) => {
    const {review}=props.review;
    return (
        <div>
            <h1>{review}</h1>
        </div>
    );
};

export default HomeSingleReview;