import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSlider = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
      {children}
   
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
      <li><Link to='/dashboard/myOrder'>My Order</Link></li>
      <li><Link to='/dashboard/addedReview'>Added Review</Link></li>
      <li><Link to='/dashboard/addProduct'>Added Product</Link></li>
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardSlider;