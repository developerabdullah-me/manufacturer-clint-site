import React from 'react';
import  CountUp  from 'react-countup';

const BusinessSummary = () => {
    return (
        <div className="mt-14">
            <div class="grid md:grid-cols-3 sm:grid-cols-3  gap-7 text-center ">
  
  <div class="">
    <div class="stat-title text-5xl pb-5">All Customer</div>
   <CountUp 
   start={8000}
   end={1234567}
   duration={5}
   > </CountUp>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="">
    <div class="stat-title text-5xl pb-5">New Users</div>
    <CountUp 
   start={8000}
   end={12345}
   duration={5}
   > </CountUp>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="">
    <div class="stat-title text-5xl pb-5">New Registers</div>
    <CountUp 
   start={8000}
   end={123456}
   duration={5}
   > </CountUp>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>

        </div>
    );
};

export default BusinessSummary;