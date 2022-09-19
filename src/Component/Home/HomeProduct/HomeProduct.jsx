import React from 'react';
import UseProduct from '../../hooks/UseProduct';
import HomeSingleProduct from './HomeSingleProduct';

import './HomeProduct.css'
const HomeProduct = () => {
    const [products,setProducts]=UseProduct()
    return (
        <div className="px-16 mt-20" >
            <div className='text-center'>
                <h1 className='text-4xl  font-serif'>GET HERE YOUR NEEDED PARTS</h1>
            </div>
            <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-8 mt-10 mb-20">
            {
                    products.slice(0,6).map((product) =><HomeSingleProduct
                     product={product}
                    key={product._id}
                     ></HomeSingleProduct>)
                }
               </div>
        </div>
    );
};

export default HomeProduct;