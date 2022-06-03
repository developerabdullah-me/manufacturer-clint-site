import React from 'react';
import UseProduct from '../../hooks/UseProduct';
import HomeSingleProduct from './HomeSingleProduct';

import './HomeProduct.css'
const HomeProduct = () => {
    const [products,setProducts]=UseProduct()
    return (
        <div className="px-16">
            <div className='text-center'>
                <h1 className='animate-character'>Six items from the manage product</h1>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-7 ">
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