import React from 'react';
import UseProduct from '../hooks/UseProduct';
import SingleManageItems from './SingleManageItems';

const ManageItems = () => {
    const [products]=UseProduct()
    return (
        <div>
           <div className='mt-16'>
        <p className="text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12">
          ALL PRODUCTS
        </p>
      </div>
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