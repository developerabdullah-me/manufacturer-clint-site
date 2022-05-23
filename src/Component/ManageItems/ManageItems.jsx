import React from 'react';
import UseProduct from '../hooks/UseProduct';
import SingleManageItems from './SingleManageItems';

const ManageItems = () => {
    const [products]=UseProduct()
    return (
        <div>
            <h1>{products.length}</h1>
            <div className='grid md:grid-cols-3 gap-7 mx-auto sm:grid-cols-1'>
                {
                    products.map(product => <SingleManageItems
                    product={product}
                    key={product._id}
                    ></SingleManageItems>)
                }
            </div>
        </div>
    );
};

export default ManageItems;