import React from 'react';
import  CountUp  from 'react-countup';

const BusinessSummary = () => {
    return (
        <div className="mt-14">
            <div class="grid md:grid-cols-3 sm:grid-cols-3  gap-7 text-center ">
  
  <div class="">
    <div class="stat-title text-center mx-auto text-3xl font-semibold mb-5 border-b-2 border-zinc-700 w-6/12">All Customer</div>
   <CountUp 
   start={8000}
   end={1234567}
   duration={5}
   className="text-4xl rounded-lg p-5 shadow-lg text-red-500" 
   > </CountUp>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="">
    <div class="stat-title text-center mx-auto text-3xl font-semibold mb-5 border-b-2 border-zinc-700 w-6/12">New Users</div>
    <CountUp 
   start={8000}
   end={12345}
   duration={5}
   className="text-4xl rounded-lg p-5 shadow-lg text-red-500" 
   > </CountUp>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="">
    <div class="stat-title text-center mx-auto text-3xl font-semibold mb-5 border-b-2 border-zinc-700 w-6/12">New Registers</div>
    <CountUp 
   start={3000}
   end={7000}
   duration={5}
   className="text-4xl rounded-lg p-5 shadow-lg text-red-500" 
   > </CountUp>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>

        </div>
    );
};

export default BusinessSummary;